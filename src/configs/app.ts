"use strict";

import { HOSTS } from "@ts-utils";
const { mongoAuth, msDevices } = HOSTS;

export default {
  name: "ms-devices",
  debug: true,
  salt: 2,
  port: msDevices.port,
  privatePort: msDevices.privatePort,
  mongoDevices: mongoAuth,
};
