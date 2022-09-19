import mongoose, { Document, Schema } from "mongoose";
import { Merchant } from "../authentications/merchant.model";

export interface Shop extends Document {
  name: string;
  description: string;
  logo: string;
  merchant: Merchant | mongoose.Types.ObjectId;
}

const shopSchma: Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: { type: String },
    coordinates: [Number],
  },
  logo: {
    type: String,
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchant",
  },
  contactNumber: {
    type: Number,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<Shop>("shop", shopSchma);
