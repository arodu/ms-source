import express from "express";
const { name } = require("@configs/app");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(`Active: ${name}`);
});

module.exports = router;
