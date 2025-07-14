// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { getFeedPosts } = CONTROLLERS.V1_CONTROLLERS.FEED_CONTROLLERS;

// Routes Section
router.route("/").get(getFeedPosts);

// Export Section
export default router;
