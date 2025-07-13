// Import Section
import express, { type Router } from "express";
import postRouter from "./post.routes";
import commentRouter from "./comment.routes";
import replyRouter from "./reply.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/posts/:post_id/comments/:comment_id/replies", replyRouter);
router.use("/posts/:post_id/comments", commentRouter);
router.use("/posts", postRouter);

// Export Section
export default router;
