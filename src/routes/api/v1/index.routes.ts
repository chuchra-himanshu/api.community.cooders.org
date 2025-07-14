// Import Section
import express, { type Router } from "express";
import postRouter from "./post.routes";
import commentRouter from "./comment.routes";
import replyRouter from "./reply.routes";
import feedRouter from "./feed.routes";
import followRouter from "./follow.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/posts/:post_id/comments/:comment_id/replies", replyRouter);
router.use("/posts/:post_id/comments", commentRouter);
router.use("/posts", postRouter);
router.use("/feed", feedRouter);
router.use("/follows", followRouter);

// Export Section
export default router;
