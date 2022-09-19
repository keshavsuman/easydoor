import { Request, Response, NextFunction } from "express";
import HttpResponse from "../../utils/httpResponse";
import * as shopServices from "./shop.service";
import mongoose from "mongoose";
import { Shop } from "./shop.model";

export async function createShop(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const shop: Shop = await shopServices.createShop(req.body);
    next(new HttpResponse("Shop created successfully", 200, shop));
  } catch (error) {
    console.log(error);
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function getShops(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, limit, search, category, subCategory } = req.query;
    const shops = await shopServices.getShops(
      parseInt(page as string),
      parseInt(limit as string),
      search as string,
      category ? new mongoose.Types.ObjectId(category as string) : undefined,
      subCategory
        ? new mongoose.Types.ObjectId(subCategory as string)
        : undefined
    );
    next(new HttpResponse("Shops fetched successfully", 200, shops));
  } catch (error) {
    console.log(error);
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function updateShop(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const shop: Shop | null = await shopServices.updateShopById(
      new mongoose.Types.ObjectId(id),
      req.body
    );
    if (shop) {
      next(new HttpResponse("Shop updated sucessfully", 200, shop.toJSON()));
    } else {
      next(new HttpResponse("Shop not found with this Id", 400));
    }
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500, {}));
  }
}

export async function getShopsByMerchantId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const shops = await shopServices.getShopsByMerchantId(
      new mongoose.Types.ObjectId(req.params.id)
    );
    next(new HttpResponse("Shop fetched successfully", 200, shops));
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500, {}));
  }
}

export async function deleteShop(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const shop: Shop | null = await shopServices.deleteShopById(
      new mongoose.Types.ObjectId(id)
    );
    if (shop) {
      next(new HttpResponse("Shop deleted sucessfully", 200, shop.toJSON()));
    } else {
      next(new HttpResponse("Shop not found with this Id", 400));
    }
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500, {}));
  }
}
