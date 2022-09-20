import mongoose, { Schema, Document } from "mongoose";
import { User } from "../authentications/user.model";

interface CartItem {
  item_type: CartItemTypeEnum;
  item_id: mongoose.Types.ObjectId;
  item_variant_id: mongoose.Types.ObjectId;
  count: number;
}

export interface Cart extends Document {
  user: mongoose.Types.ObjectId | User;
  items: Array<CartItem>;
}

export enum CartItemTypeEnum {
  Product = "product",
  Service = "service",
}

const CartItemSchema: Schema = new mongoose.Schema(
  {
    item_type: {
      type: String,
      enum: CartItemTypeEnum,
      required: true,
    },
    item_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    item_variant_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    count: {
      type: Number,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

const CartSchema: Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    unique: true,
  },
  items: [{ type: CartItemSchema }],
});

export default mongoose.model<Cart>("cart", CartSchema);
