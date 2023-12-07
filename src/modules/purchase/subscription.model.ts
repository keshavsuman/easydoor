import mongoose, { Schema, Document } from "mongoose";

export interface Subscription extends Document {}

const subscriptionSchema: Schema = new Schema(
  {},
  {
    timestamps: true,
  }
);

subscriptionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
export default mongoose.model<Subscription>("subscription", subscriptionSchema);
