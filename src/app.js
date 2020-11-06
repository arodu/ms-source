"use strict";
require("module-alias/register");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
//Enviroments variables
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/docs", express.static(path.join(__dirname, "../docs")));
app.use(cors());

//Routes
const routes = [
  {
    'prefix': '/test/',
    'router': require("./routes/test"),
  },
  //{
  //  'prefix': '/test/',
  //  'router': require("./routes/test"),
  //},
]

app.use(routes[0]['prefix'], routes[0]['router']);

//Default route
const indexRoutes = require("./routes/index");
app.use("/*", indexRoutes);

module.exports = app;
