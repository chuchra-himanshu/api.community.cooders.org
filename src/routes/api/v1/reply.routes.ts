// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createReply, updateReply, deleteReply, reactionOnReply } =
  CONTROLLERS.V1_CONTROLLERS.REPLY_CONTROLLERS;

// Routes Section
router.route("/").post(createReply);
router.route("/:reply_id/reactions").get(reactionOnReply);
router.route("/:reply_id").patch(updateReply).delete(deleteReply);

// Export Section
export default router;
