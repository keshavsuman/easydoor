import mongoose, { Aggregate } from "mongoose";
import categoryModel, { Category } from "./category.model";
import productModel, { Product } from "./product.model";
import subCategoryModel, { SubCategory } from "./subCategory.model";

export async function createProduct(product: any) {
  const newproduct: Product = await productModel.create(product);
  return newproduct;
}

export async function getProducts(
  limit: number,
  page: number,
  searchValue: string | undefined = undefined,
  category: mongoose.Types.ObjectId | undefined = undefined,
  subCategory: mongoose.Types.ObjectId | undefined = undefined,
  merchantId: mongoose.Types.ObjectId | undefined = undefined,
  shopId: mongoose.Types.ObjectId | undefined = undefined
) {
  const aggregate: Aggregate<any[]> = productModel.aggregate();

  const matchObject: any = {
    isDeleted: false,
  };

  if (
    searchValue &&
    (matchObject.productName = { $regex: searchValue, $options: "i" })
  )
    if (category && (matchObject.category = category))
      if (subCategory && (matchObject.subCategory = subCategory))
        if (merchantId && (matchObject.merchant = merchantId))
          if (shopId && (matchObject.shop = shopId)) console.log(matchObject);
  aggregate.match(matchObject);
  aggregate.limit(limit);
  aggregate.skip(limit * (page - 1));
  return await aggregate.exec();
}

export async function updateProduct(
  productId: mongoose.Types.ObjectId,
  updateBody: any
) {
  return productModel.findByIdAndUpdate(productId, updateBody, { new: true });
}

export async function deleteProductById(
  productId: mongoose.Types.ObjectId
): Promise<Product | null> {
  const product = await productModel.findByIdAndUpdate(productId, {
    isDeleted: true,
  });
  return product;
}

export async function createCategory(
  createCategoryDto: any
): Promise<Category> {
  const category = await categoryModel.create(createCategoryDto);
  return category;
}

export async function updateCategory(
  id: mongoose.Types.ObjectId,
  updateCategoryDto: any
): Promise<Category | null> {
  const category = await categoryModel.findByIdAndUpdate(
    id,
    updateCategoryDto,
    { new: true }
  );
  return category;
}

export async function getCategoryById(
  id: mongoose.Types.ObjectId
): Promise<Category | null> {
  const category = await categoryModel.findById(id);
  return category;
}

export async function createSubCategory(
  createSubCategoryDto: any
): Promise<SubCategory> {
  const subCategory = await subCategoryModel.create(createSubCategoryDto);
  return subCategory;
}

export async function getSubCategoriesByCategoryId(
  id: mongoose.Types.ObjectId
): Promise<Category | null> {
  return await categoryModel.findById(id);
}

export async function updateSubCategory(
  id: mongoose.Types.ObjectId,
  body: any
): Promise<SubCategory | null> {
  const subCategory = await subCategoryModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  return subCategory;
}

export async function deleteSubCategory(
  id: mongoose.Types.ObjectId
): Promise<SubCategory | null> {
  const subCategory = await subCategoryModel.findByIdAndDelete(id);
  return subCategory;
}
