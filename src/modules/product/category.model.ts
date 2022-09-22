import mongoose, { Schema, Document } from "mongoose";

export interface Category extends Document {
  name: string;
}

const categorySchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

export default mongoose.model<Category>("category", categorySchema);
