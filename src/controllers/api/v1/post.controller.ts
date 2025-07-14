// Import Section
import { type Response, type Request } from "express";
import { APIError, APIResponse, asyncHandler } from "../../../handlers";
import { Post } from "../../../models";

// Controller End-Points
const createPost = asyncHandler(async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const {
    description,
    tags,
    mentions,
    attachments,
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
    user: user_id,
    description,
    tags: tags || [],
    mentions: mentions || [],
    attachments: attachments || [],
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

const getPosts = asyncHandler(async (req: Request, res: Response) => {
  const { user_id } = req.params;

  const posts = await Post.find({ user: user_id, status: { $ne: "DELETED" } })
    .sort({ createdAt: -1 })
    .lean();

  return res
    .status(200)
    .json(APIResponse.send(200, "Posts fetched successfully", posts));
});

const getPost = asyncHandler(async (req: Request, res: Response) => {
  const { postId } = req.params;

  const post = await Post.findOne({
    _id: postId,
    status: { $ne: "DELETED" },
  }).lean();
  if (!post) {
    return res.status(404).json(APIError.send(404, "Post not found!"));
  }

  return res
    .status(200)
    .json(APIResponse.send(200, "Post fetched successfully", post));
});

const updatePost = asyncHandler(async (req: Request, res: Response) => {});

const deletePost = asyncHandler(async (req: Request, res: Response) => {
  const { post_id, user_id } = req.params;

  const post = await Post.findById(post_id);

  if (!post || post.status === "DELETED") {
    return res.status(404).json(APIError.send(404, "Post not found!"));
  }

  if (post.user.toString() !== user_id?.toString()) {
    return res
      .status(403)
      .json(APIError.send(404, "You are not authorized to delete this post"));
  }

  post.status = "DELETED";
  await post.save();

  return res
    .status(200)
    .json(APIResponse.send(200, "Post deleted successfully"));
});

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
