// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { handleFollowAction, getUserFollowData } =
  CONTROLLERS.V1_CONTROLLERS.FOLLOW_CONTROLLERS;

// Routes Section
router.route("/").get(getUserFollowData);
router.route("/:user_id").post(handleFollowAction);

// Export Section
export default router;
