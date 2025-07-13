// Import Section
import mongoose, { type Schema } from "mongoose";

// Schema Section
const reactionSchema: Schema = new mongoose.Schema<ReactionSchemaInterface>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    targetModel: {
      type: String,
      required: true,
      enum: ["POST", "COMMENT", "REPLY"],
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export Section
const Reaction = mongoose.model<ReactionSchemaInterface>(
  "Reaction",
  reactionSchema
);
export default Reaction;
