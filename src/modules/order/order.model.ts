import mongoose, { mongo, Schema } from "mongoose";
import { User } from "../authentications/user.model";
import { Address } from "../address/address.model";

interface OrderItem {
  item_id: mongoose.Types.ObjectId;
  quantity: Number;
  price: Number;
}

export interface Order extends Document {
  user: User | mongoose.Types.ObjectId;
  items: Array<OrderItem>;
  addressId: Address | mongoose.Types.ObjectId;
}

const orderItemSchema: Schema = new mongoose.Schema(
  {
    item_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const orderModel: Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    items: [{ type: orderItemSchema }],
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Order>("order", orderModel);
