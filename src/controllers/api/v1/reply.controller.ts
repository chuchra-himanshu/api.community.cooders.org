// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createReply = asyncHandler(async (req: Request, res: Response) => {});

const updateReply = asyncHandler(async (req: Request, res: Response) => {});

const deleteReply = asyncHandler(async (req: Request, res: Response) => {});

const reactionOnReply = asyncHandler(async (req: Request, res: Response) => {});

// Export Section
export default {
  createReply,
  updateReply,
  deleteReply,
  reactionOnReply,
};
