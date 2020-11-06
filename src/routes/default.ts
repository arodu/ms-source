import express from "express";
const router = express.Router();

//Middlwares
import { sessionMiddleware } from "@ts-utils";

//Controllers
import DefaultController from "../controllers/DefaultController";

router.get("/", DefaultController.index);
router.get("/:id", DefaultController.index);
router.post("/:id", DefaultController.index);
router.put("/:id", DefaultController.index);
router.delete("/:id", DefaultController.index);

module.exports = router;
