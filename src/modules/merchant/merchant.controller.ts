import { Request, Response, NextFunction } from "express";
import mongoose, { mongo } from "mongoose";
import HttpResponse from "../../utils/httpResponse";
import { MerchantStatus } from "../authentications/merchant.model";
import * as merchantService from "./merchant.service";

export async function updateMerchant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(req.get("id"));
    const merchant = await merchantService.updateMerchant(userId, req.body);
    next(new HttpResponse("Merchant has been updated", 200, merchant));
  } catch (error) {
    console.log(error);
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function blockUnblockMerchant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(req.get("id"));
    const { operation } = req.params;
    var merchant;
    switch (operation) {
      case MerchantStatus.Block:
        merchant = await merchantService.updateMerchant(userId, {
          status: MerchantStatus.Block,
        });
        break;
      case MerchantStatus.Unblock:
        merchant = await merchantService.updateMerchant(userId, {
          status: MerchantStatus.Unblock,
        });
        break;
      default:
        next(new HttpResponse("Operation not supported", 400));
    }
    next(new HttpResponse(`${operation} successfull`, 200, merchant));
  } catch (error) {
    console.log(error);
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function getMerchantById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(res.get("id"));
    const merchant = await merchantService.getMerchantById(userId);
    next(new HttpResponse("Merchant fetched successfully", 200, merchant));
  } catch (error) {
    console.log(error);
    next(new HttpResponse((error as Error).message, 500));
  }
}
