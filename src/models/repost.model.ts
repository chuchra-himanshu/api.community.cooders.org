// Import Section
import mongoose, { type Schema } from "mongoose";

// Schema Section
const repostSchema: Schema = new mongoose.Schema<RepostSchemaInterface>(
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
  },
  {
    timestamps: true,
  }
);

// Export Section
const Repost = mongoose.model<RepostSchemaInterface>("Repost", repostSchema);
export default Repost;
