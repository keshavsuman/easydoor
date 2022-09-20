import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import HttpException from "../../utils/httpResponse";
import * as cartService from "./cart.service";

export async function updateCartItemCount(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { cart_id,item_id, item_variant_id, count } = req.body;
    const userId = new mongoose.Types.ObjectId(res.get('id'));
    if(cart_id){
      const cart = await cartService.
    }
  } catch (error) {
    next(new HttpException((error as Error).message, 500));
  }
}

export async function addItemToCart(
  req: Request,
  res: Response,
  next: NextFunction){
    try {
      const {item_id,item_variant_id} = req.body;
      const userId = res.get('id');
    } catch (error) {
      next(new HttpException((error as Error).message, 500));
    }
  }
export async function getCartByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const cart = cartService.getCartByUserId(
      new mongoose.Types.ObjectId(res.get("id"))
    );
    next(new HttpException("cart fetched successfully", 200, cart));
  } catch (error) {
    next(new HttpException((error as Error).message, 500));
  }
}
