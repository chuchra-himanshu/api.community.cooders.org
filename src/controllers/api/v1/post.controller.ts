// Import Section
import { type Response, type Request } from "express";
import { APIResponse, asyncHandler } from "../../../handlers";
import { Post } from "../../../models";

// Controller End-Points
const createPost = asyncHandler(async (req: Request, res: Response) => {
  const user = "";
  const {
    description,
    snippets,
    tags,
    mentions,
    attachments,
    referenceLinks,
    repostId,
    quoteId,
    hidden,
    pinned,
    commentsEnabled,
    repliesEnabled,
    repostEnabled,
    quoteEnabled,
    isPrivate,
    status,
  } = req.body;

  const postPayload = {
    user,
    description,
    snippets: snippets || [],
    tags: tags || [],
    mentions: mentions || [],
    attachments: attachments || [],
    referenceLinks: referenceLinks || [],
    repostId: repostId || undefined,
    quoteId: quoteId || undefined,
    hidden: hidden ?? false,
    pinned: pinned ?? false,
    commentsEnabled: commentsEnabled ?? true,
    repliesEnabled: repliesEnabled ?? true,
    repostEnabled: repostEnabled ?? true,
    quoteEnabled: quoteEnabled ?? true,
    isPrivate: isPrivate ?? false,
    isEdited: false,
    status: status || "PUBLISHED",
  };

  await Post.create(postPayload);

  return res
    .status(201)
    .json(APIResponse.send(201, "Post created successfully"));
});

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
