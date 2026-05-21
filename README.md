# DuckDB Extension for Swamp

DuckDB integration for swamp — query model + embedded datastore backend.

## Required Tools

- `duckdb` CLI (https://duckdb.org/) — install via your package manager or download from the website

## What's Included

### 1. Query Model (`@cashlessconsumer/duckdb`)

Run SQL queries against any local DuckDB database from swamp workflows.

```bash
# Create the model
swamp model create @cashlessconsumer/duckdb mydb

# List all tables with schemas
swamp model method run mydb list_tables --input database=/path/to/data.duckdb

# Run a SQL query (auto-limits to 100 rows)
swamp model method run mydb query \
  --input database=/path/to/data.duckdb \
  --input sql="SELECT * FROM my_table LIMIT 10"

# Run with higher row limit
swamp model method run mydb query \
  --input database=/path/to/data.duckdb \
  --input sql="SELECT * FROM my_table" \
  --input limit=500

# Quick summary with row counts
swamp model method run mydb summarize --input database=/path/to/data.duckdb
```

**Methods:** `list_tables` · `query` · `summarize`

### 2. Datastore (`@cashlessconsumer/duckdb-datastore`)

Use DuckDB as the storage backend for swamp's runtime data (model outputs, resources, state).

```yaml
# .swamp.yaml
datastore:
  type: "@cashlessconsumer/duckdb-datastore"
  config:
    database: "/path/to/swamp.duckdb"
    schema: "swamp"
```

Or via environment variable:
```bash
export SWAMP_DATASTORE='@cashlessconsumer/duckdb-datastore:{"database":"/data/swamp.duckdb"}'
```

**Config options:**

| Field | Default | Description |
|-------|---------|-------------|
| `database` | *(required)* | Path to `.duckdb` file, or `:memory:` |
| `schema` | `"swamp"` | SQL schema for swamp tables |
| `accessMode` | `"read_write"` | `read_write` or `read_only` |

## Typical Workflow

```yaml
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
