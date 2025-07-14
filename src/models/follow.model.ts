// Import Section
import mongoose, { type Schema } from "mongoose";

// Schema Section
const followSchema: Schema = new mongoose.Schema<FollowSchemaInterface>(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["ACCEPTED", "REJECTED", "PENDING"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

// Export Section
const Follow = mongoose.model<FollowSchemaInterface>("Follow", followSchema);
export default Follow;
