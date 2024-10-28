import express from "express"
import expeditionController from "../controllers/expedition-controller.js"
import { Router } from "express"

const router = Router()

router.post("/", expeditionController.store);
router.get("/", expeditionController.index);
router.get("/:id", expeditionController.show);
router.put("/:id", expeditionController.update);
router.delete("/:id", expeditionController.destroy);

export default router;
