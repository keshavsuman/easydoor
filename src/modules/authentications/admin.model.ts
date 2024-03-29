import mongoose, { Schema, Document } from "mongoose";

export interface Admin extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isProfileCompleted: boolean;
  isEmailVerified: boolean;
  updatedAt: Date;
  createdAt: Date;
}

const adminSchema: Schema = new Schema(
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
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model<Admin>("admins", adminSchema);
