import express from "express"
import explorerController from "../controllers/explorer-controller.js"
import { Router } from "express"

const router = Router()

router.post("/", explorerController.store);
router.get("/", explorerController.index);
router.get("/:id", explorerController.show);
router.put("/:id", explorerController.update);
router.delete("/:id", explorerController.destroy);

export default router;
