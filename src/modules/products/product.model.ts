import mongoose, { Schema, Document } from "mongoose";

export interface Product extends Document {
  productName: string;
  productDescription: string;
  price: number;
}

const productSchema: Schema = new mongoose.Schema({
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shop",
  },
  productName: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model<Product>("products", productSchema);
