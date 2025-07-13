// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createComment, updateComment, deleteComment, reactionOnComment } =
  CONTROLLERS.V1_CONTROLLERS.COMMENT_CONTROLLERS;

// Routes Section
router.route("/").post(createComment);
router.route("/:comment_id/reactions").get(reactionOnComment);
router.route("/:comment_id").patch(updateComment).delete(deleteComment);

// Export Section
export default router;
