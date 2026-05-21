/**
 * DuckDB query model for swamp.
 *
 * Run SQL queries against local DuckDB databases, list tables, inspect
 * schemas, and export query results as structured data resources.
 *
 * @module
 */

import { z } from "npm:zod@4.3.6";

// =============================================================================
// Schemas
// =============================================================================

const GlobalArgsSchema = z.object({});

const ColumnSchema = z.object({
  name: z.string(),
  type: z.string(),
  nullable: z.boolean(),
});

const TableSchema = z.object({
  name: z.string(),
  columns: z.array(ColumnSchema),
  columnCount: z.number(),
});

const TableListSchema = z.object({
  database: z.string(),
  tables: z.array(TableSchema),
  count: z.number(),
  fetchedAt: z.string(),
});

const QueryResultRow = z.record(z.unknown());
type QueryResultRow = z.infer<typeof QueryResultRow>;

const QueryResultSchema = z.object({
  database: z.string(),
  query: z.string(),
  columns: z.array(z.string()),
  rows: z.array(QueryResultRow),
  rowCount: z.number(),
  truncated: z.boolean(),
  truncatedAt: z.number().optional(),
  durationMs: z.number(),
  fetchedAt: z.string(),
});

const SummaryRow = z.object({
  table: z.string(),
  columnCount: z.number().optional(),
  estimatedRows: z.string().optional(),
});

const SummarySchema = z.object({
  database: z.string(),
  tables: z.array(SummaryRow),
  totalTables: z.number(),
  fetchedAt: z.string(),
});

// =============================================================================
// Helper Functions
// =============================================================================

async function runDuckDB(
  dbPath: string,
  sql: string,
): Promise<{ stdout: string; stderr: string; success: boolean }> {
  const args = ["-csv", "-c", sql, dbPath];
  const cmd = new Deno.Command("duckdb", {
    args,
    stdout: "piped",
    stderr: "piped",
  });
  const output = await cmd.output();
  return {
    stdout: new TextDecoder().decode(output.stdout),
    stderr: new TextDecoder().decode(output.stderr),
    success: output.success,
  };
}

function parseCSV(csv: string): { columns: string[]; rows: QueryResultRow[] } {
  const lines = csv.trim().split("\n");
  if (lines.length < 1) return { columns: [], rows: [] };

  const columns = parseCSVLine(lines[0]);
  const rows: QueryResultRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = parseCSVLine(lines[i]);
    const row: QueryResultRow = {};
    for (let j = 0; j < columns.length; j++) {
      row[columns[j]] = values[j] ?? null;
    }
    rows.push(row);
  }
  return { columns, rows };
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        result.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
  }
  result.push(current.trim());
  return result;
}

// =============================================================================
// Context Type
// =============================================================================

type ModelContext = {
  globalArgs: Record<string, never>;
  writeResource: (
    spec: string,
    instance: string,
    data: unknown,
  ) => Promise<{ name: string }>;
  logger: {
    info: (msg: string, props: Record<string, unknown>) => void;
    warning: (msg: string, props: Record<string, unknown>) => void;
  };
};

// =============================================================================
// Model Definition
// =============================================================================

/**
 * DuckDB query model for running SQL against local .duckdb files.
 *
 * Provides three methods: list_tables (schema inspection), query (arbitrary SQL),
 * and summarize (quick overview with row counts).
 *
 * @example
 * // Create the model
 * swamp model create @cashlessconsumer/duckdb mydb;
 *
 * // Query a database
 * swamp model method run mydb query \
 *   --input database=/path/to/data.duckdb \
 *   --input sql="SELECT * FROM my_table LIMIT 10";
 */
export const model = {
  type: "@cashlessconsumer/duckdb",
  version: "2026.05.21.1",
  globalArguments: GlobalArgsSchema,

  resources: {
    tables: {
      description: "List of tables and their column schemas in a database",
      schema: TableListSchema,
      lifetime: "1h" as const,
      garbageCollection: 10,
    },
    query_result: {
      description: "Results of a SQL query against a DuckDB database",
      schema: QueryResultSchema,
      lifetime: "1h" as const,
      garbageCollection: 10,
    },
    summary: {
      description: "High-level summary of all tables in a database",
      schema: SummarySchema,
      lifetime: "1h" as const,
      garbageCollection: 10,
    },
  },

  methods: {
    list_tables: {
      description:
        "List all tables with their column names and types in a DuckDB database",
      arguments: z.object({
        database: z.string().describe("Path to the DuckDB database file"),
      }),
      execute: async (
        args: { database: string },
        context: ModelContext,
      ) => {
        const { stdout, success, stderr } = await runDuckDB(
          args.database,
          "SELECT table_name, column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema='main' ORDER BY table_name, ordinal_position",
        );
        if (!success) {
          throw new Error(`Failed to list tables: ${stderr}`);
        }

        const { columns, rows } = parseCSV(stdout);
        const tableMap = new Map<string, typeof TableSchema._type>();

        for (const row of rows) {
          const tableName = String(row["table_name"] ?? "");
          if (!tableMap.has(tableName)) {
            tableMap.set(tableName, {
              name: tableName,
              columns: [],
              columnCount: 0,
            });
          }
          const table = tableMap.get(tableName)!;
          table.columns.push({
            name: String(row["column_name"] ?? ""),
            type: String(row["data_type"] ?? ""),
            nullable: String(row["is_nullable"] ?? "").toUpperCase() === "YES",
          });
          table.columnCount = table.columns.length;
        }

        const tables = Array.from(tableMap.values());

        context.logger.info("Found {count} tables in {db}", {
          count: tables.length,
          db: args.database,
        });

        const handle = await context.writeResource(
          "tables",
          args.database.replace(/[\/\.]/g, "-"),
          {
            database: args.database,
            tables,
            count: tables.length,
            fetchedAt: new Date().toISOString(),
          },
        );
        return { dataHandles: [handle] };
      },
    },

    query: {
      description:
        "Execute a SQL query against a DuckDB database and return structured results",
      arguments: z.object({
        database: z.string().describe("Path to the DuckDB database file"),
        sql: z.string().describe("SQL query to execute"),
        limit: z.number().default(100).describe(
          "Maximum number of rows to return (0 = unlimited)",
        ),
      }),
      execute: async (
        args: { database: string; sql: string; limit: number },
        context: ModelContext,
      ) => {
        let sql = args.sql.trim().replace(/;+\s*$/, "");
        let truncated = false;
        let truncatedAt: number | undefined;

        if (args.limit > 0 && !sql.toUpperCase().includes("LIMIT")) {
          sql += ` LIMIT ${args.limit}`;
          truncatedAt = args.limit;
        }

        const start = performance.now();
        const { stdout, success, stderr } = await runDuckDB(args.database, sql);
        const durationMs = Math.round(performance.now() - start);

        if (!success) {
          throw new Error(`Query failed: ${stderr}`);
        }

        const { columns, rows } = parseCSV(stdout);
        if (args.limit > 0 && rows.length === args.limit) {
          truncated = true;
        }

        context.logger.info("Query returned {rows} rows in {ms}ms from {db}", {
          rows: rows.length,
          ms: durationMs,
          db: args.database,
        });

        const instanceName = `query-${Date.now()}`;
        const handle = await context.writeResource(
          "query_result",
          instanceName,
          {
            database: args.database,
            query: args.sql,
            columns,
            rows,
            rowCount: rows.length,
            truncated,
            truncatedAt,
            durationMs,
            fetchedAt: new Date().toISOString(),
          },
        );
        return { dataHandles: [handle] };
      },
    },

    summarize: {
      description:
        "Get a high-level summary of all tables in a DuckDB database with row counts",
      arguments: z.object({
        database: z.string().describe("Path to the DuckDB database file"),
      }),
      execute: async (
        args: { database: string },
        context: ModelContext,
      ) => {
        const { stdout, success, stderr } = await runDuckDB(
          args.database,
          `SELECT table_name, COUNT(*) AS column_count FROM information_schema.columns WHERE table_schema='main' GROUP BY table_name ORDER BY table_name`,
        );
        if (!success) {
          throw new Error(`Failed to summarize: ${stderr}`);
        }

        const { columns, rows } = parseCSV(stdout);

        const tables: typeof SummaryRow[] = [];
        for (const row of rows) {
          const tableName = String(row["table_name"] ?? "");
          const colCount = Number(row["column_count"] ?? 0);

          let estimatedRows: string | undefined;
          try {
            const countResult = await runDuckDB(
              args.database,
              `SELECT COUNT(*)::VARCHAR AS cnt FROM "${tableName}"`,
            );
            if (countResult.success) {
              const countRows = parseCSV(countResult.stdout);
              if (countRows.rows.length > 0) {
                estimatedRows = String(countRows.rows[0]["cnt"] ?? "");
              }
            }
          } catch {
            estimatedRows = undefined;
          }

          tables.push({
            table: tableName,
            columnCount: colCount,
            estimatedRows,
          });
        }

        context.logger.info("Summarized {count} tables in {db}", {
          count: tables.length,
          db: args.database,
        });

        const handle = await context.writeResource(
          "summary",
          args.database.replace(/[\/\.]/g, "-"),
          {
            database: args.database,
            tables,
            totalTables: tables.length,
            fetchedAt: new Date().toISOString(),
          },
        );
        return { dataHandles: [handle] };
      },
    },
  },
};
