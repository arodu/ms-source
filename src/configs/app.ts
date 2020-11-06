"use strict";

const { HOSTS } = require("@ts-utils");
const { mongoAuth, msDevices } = HOSTS;

export default {
  name: "ms-devices",
  debug: true,
  salt: 2,
  port: msDevices.port,
  mongoDevices: mongoAuth,
};
