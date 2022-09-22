import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import merchantModel, {
  Merchant,
} from "../modules/authentications/merchant.model";
import categoryModel, { Category } from "../modules/product/category.model";
import productModel, { Product } from "../modules/product/product.model";
import subCategoryModel from "../modules/product/subCategory.model";
import shopModel, { Shop } from "../modules/shop/shop.model";

export default async function CreateFakeProduct(
  merchant: mongoose.Types.ObjectId,
  shop: mongoose.Types.ObjectId
) {
  const categories: Array<Category> = await categoryModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  const subCategories = await subCategoryModel.aggregate([
    {
      $match: {
        category: categories[0]._id,
      },
    },
    { $sample: { size: 1 } },
  ]);
  const product: Product = await productModel.create({
    merchant: merchant,
    shop: shop,
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    category: categories[0]._id,
    subCategories: subCategories[0]._id,
  });
  return product;
}

async function init() {
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });
  for (let i = 0; i < 2500; i++) {
    const merchant: Array<Merchant> = await merchantModel.aggregate([
      { $sample: { size: 1 } },
    ]);
    const shop: Array<Shop> = await shopModel.aggregate([
      {
        $match: {
          merchant: merchant[0]._id,
        },
      },
      { $sample: { size: 1 } },
    ]);
    if (shop.length > 0) {
      for (let i = 0; i < Math.floor(Math.random() * 45); i++) {
        await CreateFakeProduct(merchant[0]._id, shop[0]._id);
      }
    }
  }
}

init();
