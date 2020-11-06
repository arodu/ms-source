"use strict";

const mongoAuth = require("./app").mongoAuth;
/**
 * @global Database default config
 */
module.exports = {
  dbname: process.env.DB_NAME,
  host: mongoAuth.host,
  port: mongoAuth.port,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
