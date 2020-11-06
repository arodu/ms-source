import express from "express";
const router = express.Router();
//Middlwares
import { sessionMiddleware } from "@ts-utils";

//Controllers
import TestController from "../controllers/TestController";

router.get("/", TestController.test);
//router.post("/individual", sessionMiddleware, MailerController.sendIndividual);

module.exports = router;
