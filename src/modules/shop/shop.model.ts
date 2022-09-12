import mongoose, { Document, Schema } from "mongoose";

export interface Shop extends Document {
  name: string;
}

const shopSchma: Schema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model<Shop>("shop", shopSchma);
