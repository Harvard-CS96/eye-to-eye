# Configuration

The npm packages *dotenv* and *getconfig* are used for configuration. *getconfig* uses JSON to store configuration in `/config/default.json`  and *dotenv* uses key-value pairs stored in `/.env`. 

Data stored in `/config/default.json` is inevitably passed to the client side and is thus not secret, meaning that it can be safely committed. Data stored in `/.env` is not committed (and blacklisted by `/.gitignore`) because it contains sensitive API keys.

To load this configuration, the following code is run in `/server.js`:

```
require('dotenv').config();
var config = require('getconfig');
```

This stores the environment variables in `/.env` in `process.env` and the JSON in `/config/default.json` into the variable `config`.