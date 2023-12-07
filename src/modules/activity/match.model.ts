import mongoose, { Schema } from "mongoose";

const matchSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  match: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
});

export default mongoose.model("Match", matchSchema);
