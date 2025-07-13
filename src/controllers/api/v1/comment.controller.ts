// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createComment = asyncHandler(async (req: Request, res: Response) => {});

const updateComment = asyncHandler(async (req: Request, res: Response) => {});

const deleteComment = asyncHandler(async (req: Request, res: Response) => {});

const reactionOnComment = asyncHandler(
  async (req: Request, res: Response) => {}
);

// Export Section
export default {
  createComment,
  updateComment,
  deleteComment,
  reactionOnComment,
};
