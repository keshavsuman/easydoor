import mongoose, { Schema } from "mongoose";

const s3filelogSchema: Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  fileName: {
    type: String,
  },
  fileUrl: {
    type: String,
  },
  fileType: {
    type: String,
  },
  fileSize: {
    type: Number,
  },
});
module.exports = mongoose.model("s3fileLog", s3filelogSchema);
