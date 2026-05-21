# DuckDB Query Model for Swamp

Run SQL queries against local DuckDB databases from swamp workflows.

## Required Tools

- `duckdb` CLI (https://duckdb.org/) — install via your package manager or download from the website

## Usage

```bash
# Create the duckdb model
swamp model create @cashlessconsumer/duckdb mydb

# List all tables with their schemas
swamp model method run mydb list_tables --input database=/path/to/data.duckdb

# Run a SQL query (returns up to 100 rows by default)
swamp model method run mydb query \
  --input database=/path/to/data.duckdb \
  --input sql="SELECT * FROM my_table LIMIT 10"

# Run a query with a higher row limit
swamp model method run mydb query \
  --input database=/path/to/data.duckdb \
  --input sql="SELECT * FROM my_table" \
  --input limit=500

# Get a high-level summary with row counts
swamp model method run mydb summarize --input database=/path/to/data.duckdb
```

## Methods

- **list_tables** — List all tables with column names, types, and nullability
- **query** — Execute arbitrary SQL and return structured results (auto-limits to 100 rows)
- **summarize** — Get a quick overview of all tables with approximate row counts

## Data Resources

| Resource | Description | Lifetime |
|----------|-------------|----------|
| `tables` | Table list with full column schemas | 1h |
| `query_result` | SQL query output (columns + rows) | 1h |
| `summary` | High-level database summary | 1h |

## Typical Workflow

Chain DuckDB query results into other models:

```yaml
# In a workflow, query DuckDB then use the result downstream
steps:
  - name: fetch-data
    task:
      type: model_method
      modelIdOrName: mydb
      methodName: query
      input:
        database: /path/to/data.duckdb
        sql: "SELECT category, SUM(amount) as total FROM transactions GROUP BY category"
  - name: process-data
    task:
      type: model_method
      modelIdOrName: downstream-model
      methodName: analyze
      dependsOn:
        - fetch-data
```

## License

Apache-2.0
