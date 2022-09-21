import mongoose, { Schema, Document } from "mongoose";

export interface Address extends Document {
  lane1: string;
  lane2: string;
  city: string;
  state: string;
  pincode: number;
  location: Object;
  user: mongoose.Types.ObjectId;
  isDeleted: boolean;
  role: string;
}

const addressSchema: Schema = new mongoose.Schema({
  lane1: {
    type: String,
    required: true,
  },
  lane2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
  },
  location: {
    type: { type: String },
    coordinates: [Number],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  role: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

addressSchema.index({ loc: "2dsphere" });

addressSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model<Address>("address", addressSchema);
