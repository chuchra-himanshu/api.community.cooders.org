// Import Section
import mongoose, { type Schema } from "mongoose";

// Schema Section
const attachmentSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    id: { type: String, required: true },
    type: {
      type: String,
      enum: ["IMAGE", "VIDEO", "FILE", "AUDIO"],
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

const commentSchema: Schema<CommentSchemaInterface> = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
    content: {
      type: String,
      required: true,
    },
    snippets: {
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
    repliesEnabled: {
      type: Boolean,
      default: true,
    },
    quoteEnabled: {
      type: Boolean,
      default: true,
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
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

// Export Section
const Comment = mongoose.model<CommentSchemaInterface>(
  "Comment",
  commentSchema
);
export default Comment;
