"use strict";
require("module-alias/register");

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import { appRouterList } from "@ts-utils";

//Enviroments variables
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/docs", express.static(path.join(__dirname, "../docs")));
app.use(cors());

var privateApp = { ...app };

//Routes
app = appRouterList(app, "/devices", {
  "/default/": require("./routes/default"),
  "/": require("./routes/index"),
});

//Routes
privateApp = appRouterList(privateApp, "/devices", {
  "/default/": require("./routes/default"),
  "/": require("./routes/index"),
});

module.exports = {
  app,
  privateApp,
};
