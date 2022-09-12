import productModel, { Product } from "./product.model";

export async function createProduct(product: any) {
  const newproduct: Product = await productModel.create(product);
  return newproduct;
}

export async function getProducts(
  searchValue: string = "",
  limit: number,
  page: number
) {}
