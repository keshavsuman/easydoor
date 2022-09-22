import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import categoryModel from "../modules/product/category.model";

export default async function CreateFakeCategories() {
  const categories = await categoryModel.create({
    name: faker.commerce.department(),
  });
  return categories;
}

async function init() {
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });
  for (let i = 0; i < 35; i++) {
    CreateFakeCategories();
  }
}

init();
