// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const getUserFollowData = asyncHandler(
  async (req: Request, res: Response) => {}
);

const handleFollowAction = asyncHandler(
  async (req: Request, res: Response) => {}
);

// Export Section
export default { getUserFollowData, handleFollowAction };
