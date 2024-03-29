import mongoose, { Schema, Document } from "mongoose";

export interface Merchant extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isProfileCompleted: boolean;
  isEmailVerified: boolean;
  updatedAt: Date;
  createdAt: Date;
}
export enum MerchantStatus {
  Block = "block",
  Unblock = "unblock",
  Active = "active",
}
const merchantSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "merchant",
    },
    status: {
      type: String,
      enum: MerchantStatus,
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

merchantSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model<Merchant>("merchant", merchantSchema);
