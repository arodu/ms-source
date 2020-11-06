/**
 * @global application data
 */
const { HOSTS } = require("@ts-utils");
const { mongoAuth, msMailer } = HOSTS;

module.exports = {
  name: "ms-mailer",
  debug: true,
  salt: 2,
  port: msMailer.port,
  mongoAuth: mongoAuth,
};
