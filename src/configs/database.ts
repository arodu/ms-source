"use strict";

import app from "./app";

/**
 * @global Database default config
 */
export default {
  dbname: process.env.DB_NAME,
  host: app.mongoDevices.host,
  port: app.mongoDevices.port,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
