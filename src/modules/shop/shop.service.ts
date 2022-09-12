import mongoose from "mongoose";
import shopModel, { Shop } from "./shop.model";

export async function createShop() {}

export async function getShopById(
  id: mongoose.Schema.Types.ObjectId
): Promise<Shop | null> {
  const shop: Shop | null = await shopModel.findById(id);
  return shop;
}
