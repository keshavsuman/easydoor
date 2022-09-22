import mongoose, { Schema } from "mongoose";
import { Category } from "./category.model";

export interface SubCategory {
  name: string;
  category: mongoose.Types.ObjectId | Category;
}

const subcategorySchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

export default mongoose.model<SubCategory>("subcategory", subcategorySchema);
