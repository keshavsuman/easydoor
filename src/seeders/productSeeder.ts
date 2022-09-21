import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import productModel, { Product } from "../modules/product/product.model";

export default async function CreateFakeProduct() {
  const product: Product = await productModel.create({});
  return product;
}

async function init() {
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });
  CreateFakeProduct();
}

// init();
