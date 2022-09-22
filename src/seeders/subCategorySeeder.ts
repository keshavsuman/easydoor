import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import categoryModel from "../modules/product/category.model";
import subCategoryModel from "../modules/product/subCategory.model";

export default async function CreateFakeSubCategories() {
  const categories = await categoryModel.aggregate([{ $sample: { size: 1 } }]);
  const subCategory = await subCategoryModel.create({
    name: faker.commerce.department(),
    category: categories[0]._id,
  });
  return subCategory;
}

async function init() {
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });
  for (let i = 0; i < 350; i++) {
    CreateFakeSubCategories();
  }
}

init();
