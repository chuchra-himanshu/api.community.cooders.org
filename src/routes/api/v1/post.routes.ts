// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  reactionOnPost,
} = CONTROLLERS.V1_CONTROLLERS.POST_CONTROLLERS;

// Routes Section
router.route("/").post(createPost).get(getPosts);
router.route("/:post_id/reactions").get(reactionOnPost);
router.route("/:post_id").get(getPost).patch(updatePost).delete(deletePost);

// Export Section
export default router;
