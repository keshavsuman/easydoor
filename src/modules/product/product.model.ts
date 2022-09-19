import mongoose, { Schema, Document } from "mongoose";

enum SellingUnitEnum {
  KILOGRAM = "kilogram",
  GRAM = "gram",
  LITRE = "liter",
  UNIT = "unit",
}

enum ProductStatusEnum {
  AVAILABLE = "available",
  SOLDOUT = "soldout",
  OUTOFSTOCK = "outofstock",
}

interface ProductVariant {
  productName: string;
  productDescription: string;
  price: number;
  discountedPrice: number;
  productImage: string;
  quantity: number;
  sellingUnit: SellingUnitEnum;
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
    discountedPrice: {
      type: Number,
    },
    productImage: {
      type: [{ type: String }],
    },
    quantity: {
      type: Number,
    },
    sellingUnit: {
      type: String,
      enum: SellingUnitEnum,
    },
    productStatus: {
      type: String,
      enum: ProductStatusEnum,
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
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<Product>("product", productSchema);
