---
title: Python
description: Set up a Python environment.
sidebar:
    order: 1
---

Use this guide to set up a Python environment.

## Connecting to the Utile GIS Database

### Create a Connection

```python
from sqlalchemy import URL, create_engine

conn = create_engine(
    URL.create(
        "postgresql+pg8000",
        # Name of the place, which is the name of the
        # database.
        database="placename",
        # This is the GIS database IP address.
        # Replace with value supplied by Utile.
        host='000.00.000.00',
        # A _port_ is like a unit number in the apartment building!
        # Replace with value supplied by Utile.
        port = 0000,
        # These are your Utile-supplied credentials.
        # Replace with values supplied by Utile.
        username="USERNAME",
        password="PASSWORD",
    )
)
```

### Read Database Tables

#### Spatial Tables

```python
import geopandas as gpd
df = gpd.read_postgis(
    sql="desired_layer", 
    con=conn
    )
```

#### Non-Spatial Tables

```python
import pandas as pd
df = pd.read_sql(
    sql='desired_layer', 
    con=conn
    )
```

### Read Query Results

#### Spatial Tables

```python
import geopandas as gpd
df = gpd.read_postgis(
    sql='SELECT * FROM desired_layer LIMIT 10;', 
    con=conn
    )
```


#### Non-Spatial Tables

```python
import pandas as pd
df = pd.read_sql(
    sql='SELECT * FROM desired_layer LIMIT 10;', 
    con=conn
    )
```

