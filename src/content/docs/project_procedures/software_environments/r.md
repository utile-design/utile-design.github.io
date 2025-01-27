---
title: R
description: Set up a R environment.
---

Use this guide to set up an R environment.

## Connecting to the Utile GIS Database

### Create a Connection

```r
conn <- DBI::dbConnect(
    RPostgres::Postgres(),
    # Name of the place, which is the name of the
    # database.
    dbname = 'placename',
    # This is the GIS database IP address.
    # Replace with value supplied by Utile.
    host = '000.00.000.00',
    # A _port_ is like a unit number in the apartment building!
    # Replace with value supplied by Utile.
    port = 0000,
    # These are your Utile-supplied credentials.
    # Replace with values supplied by Utile.
    user = 'USERNAME',
    password = 'PASSWORD'
    )
```

### Read Database Tables

#### Spatial Tables

```r
# Spatial tables.
df <- sf::st_read(
    dsn = conn,
    layer = 'desired_layer'
)
```

#### Non-Spatial Tables

```r
df <- DBI::dbReadTable(
    conn = conn,
    name = 'desired_layer'
)
```

### Read Query Results

#### Spatial Tables

```r
df <- sf::st_read(
    dsn = conn,
    query = 'SELECT * FROM desired_layer LIMIT 10;'
)
```


#### Non-Spatial Tables

```r
df <- DBI::dbGetQuery(
    conn = conn,
    statement = 'SELECT * FROM desired_layer LIMIT 10;'
)
```

