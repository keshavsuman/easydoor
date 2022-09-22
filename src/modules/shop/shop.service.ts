import mongoose, { Aggregate } from "mongoose";
import shopModel, { Shop } from "./shop.model";

export async function createShop(createShopDto: any): Promise<Shop> {
  return await shopModel.create(createShopDto);
}

export async function getShopById(
  id: mongoose.Schema.Types.ObjectId
): Promise<Shop | null> {
  const shop: Shop | null = await shopModel.findById(id);
  return shop;
}

export async function getShops(
  page: number,
  limit: number,
  search: string | undefined = undefined,
  category: mongoose.Types.ObjectId | undefined = undefined,
  subCategory: mongoose.Types.ObjectId | undefined = undefined
): Promise<Array<Shop>> {
  const shopAggregate: Aggregate<any> = shopModel.aggregate();

  const matchBody: any = {};

  if (search) {
    matchBody.name = { $regex: search, $options: "i" };
  }
  category ? (matchBody.category = category) : "";
  subCategory ? (matchBody.subCategory = subCategory) : "";

  shopAggregate.match(matchBody);
  shopAggregate.limit(limit);
  shopAggregate.skip(limit * (page - 1));
  return await shopAggregate.exec();
}

export async function getShopsByMerchantId(
  merchantId: mongoose.Types.ObjectId
) {
  return await shopModel.find({
    merchant: merchantId,
  });
}

export async function updateShopById(
  shopId: mongoose.Types.ObjectId,
  updateBody: any
): Promise<Shop | null> {
  return await shopModel.findByIdAndUpdate(shopId, updateBody, { new: true });
}

export async function deleteShopById(
  shopId: mongoose.Types.ObjectId
): Promise<Shop | null> {
  return await shopModel.findByIdAndUpdate(
    shopId,
    { isDeleted: true },
    { new: true }
  );
}
