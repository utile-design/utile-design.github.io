---
title: GIS Database
description: PostGIS administration documentation.
sidebar:
    order: 0
---

# Building a `.env` File



## Adding a New Database User

To create a new database user...

```sql
-- Creates read-only user.
REVOKE ALL ON DATABASE {db} FROM {username};
GRANT CONNECT ON DATABASE {db} TO {username};
GRANT SELECT ON ALL TABLES IN SCHEMA public TO {username};
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO {username};
```

## Removing a Database User

To remove a database user...
