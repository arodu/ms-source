import express from "express";
import name from "@configs/app";
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send(`Active: ${name}`);
});

module.exports = router;
