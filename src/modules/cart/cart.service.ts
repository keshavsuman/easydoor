import mongoose from "mongoose";
import CartModel, { Cart, CartItemTypeEnum } from "./cart.model";

export async function createCart(
  userId: mongoose.Types.ObjectId
): Promise<Cart> {
  return await CartModel.create({
    user: userId,
    items: [],
  });
}

export async function addItemToCart(
  userId: mongoose.Types.ObjectId,
  item_type: CartItemTypeEnum,
  item_id: mongoose.Types.ObjectId,
  item_variant_id: mongoose.Types.ObjectId
): Promise<Cart | undefined> {
  const cart: Cart | null = await getCartByUserId(userId);
  cart?.items.push({
    item_id,
    item_type,
    item_variant_id,
    count: 1,
  });
  return await cart?.save();
}

export async function getCartByUserId(
  userId: mongoose.Types.ObjectId
): Promise<Cart | null> {
  return await CartModel.findOne({
    user: userId,
  });
}

export async function updateCartItemCountByUserId(
  userId: mongoose.Types.ObjectId,
  item_id: mongoose.Types.ObjectId,
  item_variant_id: mongoose.Types.ObjectId,
  count: number
): Promise<Cart | null> {}

export async function updateCartItemCountByCartId(
  cartId: mongoose.Types.ObjectId,
  item_id: mongoose.Types.ObjectId,
  item_variant_id: mongoose.Types.ObjectId,
  count: number
): Promise<Cart | null> {}
