// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createPost = asyncHandler(async (req: Request, res: Response) => {});

const getPosts = asyncHandler(async (req: Request, res: Response) => {});

const getPost = asyncHandler(async (req: Request, res: Response) => {});

const updatePost = asyncHandler(async (req: Request, res: Response) => {});

const deletePost = asyncHandler(async (req: Request, res: Response) => {});

const reactionOnPost = asyncHandler(async (req: Request, res: Response) => {});

// Export Section
export default {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  reactionOnPost,
};
