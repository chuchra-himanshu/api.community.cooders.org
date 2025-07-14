// Import Section
import mongoose, { type Schema } from "mongoose";

// Schema Section
const attachmentSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    id: { type: String, required: true },
    type: {
      type: String,
      enum: ["IMAGE", "VIDEO", "FILE"],
      required: true,
    },
  },
  { _id: false }
);

const referenceLinkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const postSchema: Schema<PostSchemaInterface> = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    snippets: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    mentions: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    attachments: {
      type: [attachmentSchema],
      default: [],
    },
    referenceLinks: {
      type: [referenceLinkSchema],
      default: [],
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    commentsEnabled: {
      type: Boolean,
      default: true,
    },
    repliesEnabled: {
      type: Boolean,
      default: true,
    },
    repostEnabled: {
      type: Boolean,
      default: true,
    },
    quoteEnabled: {
      type: Boolean,
      default: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["PUBLISHED", "DRAFT", "DELETED"],
      default: "PUBLISHED",
    },
    quoteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    repostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

// Export Section
const Post = mongoose.model<PostSchemaInterface>("Post", postSchema);
export default Post;
