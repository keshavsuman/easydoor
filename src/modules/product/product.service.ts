import mongoose, { Aggregate } from "mongoose";
import productModel, { Product } from "./product.model";

export async function createProduct(product: any) {
  const newproduct: Product = await productModel.create(product);
  return newproduct;
}

export async function getProducts(
  limit: number,
  page: number,
  searchValue: string | undefined = undefined,
  category: mongoose.Types.ObjectId | undefined = undefined,
  subCategory: mongoose.Types.ObjectId | undefined = undefined
) {
  const aggregate: Aggregate<any[]> = productModel.aggregate();

  const matchObject: any = {
    isDeleted: false,
  };
  searchValue
    ? (matchObject.productName = { $regex: searchValue, $options: "i" })
    : "";
  aggregate.match(matchObject);
  aggregate.limit(limit);
  aggregate.skip(limit * (page - 1));
  return await aggregate.exec();
}

export async function deleteProductById(productId: mongoose.Types.ObjectId) {
  const product = await productModel.findByIdAndUpdate(productId, {
    isDeleted: true,
  });
}
