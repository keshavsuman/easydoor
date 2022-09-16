import mongoose, { Schema, Document } from "mongoose";

interface ProductVariant {
  productName: string;
  productDescription: string;
  price: number;
}

export interface Product extends Document {
  marchant: mongoose.Types.ObjectId;
  shop: mongoose.Types.ObjectId;
  productName: string;
  productDescription: string;
  price: number;
  variants: Array<ProductVariant>;
}

const productVariantSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    _id: false,
  }
);

const productSchema: Schema = new mongoose.Schema({
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchant",
  },
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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subCategories: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "subCategory" }],
  },
  variants: [
    {
      type: productVariantSchema,
    },
  ],
});

export default mongoose.model<Product>("product", productSchema);
