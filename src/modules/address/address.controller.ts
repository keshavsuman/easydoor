import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import HttpResponse from "../../utils/httpResponse";
import HttpException from "../../utils/httpResponse";
import addressModel, { Address } from "./address.model";
import * as addressService from "./address.service";

export async function createAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const address: Address = await addressService.createAddress({
      user: new mongoose.Types.ObjectId(res.get("id")),
      ...req.body,
      role: res.get("role"),
    });
    next(
      new HttpResponse("Address created Successfully", 201, address.toJSON())
    );
  } catch (error) {
    console.log(error);
    next(new HttpException((error as Error).message, 500));
  }
}

export async function updateAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const address: Address | null = await addressService.updateAddress(
      new mongoose.Types.ObjectId(req.params.id),
      req.body
    );
    if (address) {
      next(
        new HttpResponse("Address Updated Successfully", 200, address?.toJSON())
      );
    } else {
      next(new HttpResponse("Address Not found with this Id", 400));
    }
  } catch (error) {
    console.log(error);
    next(new HttpException((error as Error).message, 500));
  }
}

export async function deleteAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const address = await addressModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      {
        isDeleted: true,
      }
    );
    if (address) {
      next(
        new HttpResponse("Address deleted successfully", 200, address.toJSON())
      );
    } else {
      next(new HttpResponse("Address doesn't found with this Id ", 400));
    }
  } catch (error) {
    console.log(error);
    next(new HttpException((error as Error).message, 500));
  }
}

export async function getAddresses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const address = await addressService.getAddress(
      new mongoose.Types.ObjectId(res.get("id"))
    );
    next(new HttpResponse("Address fetched successfully", 200, address));
  } catch (error) {
    console.log(error);
    next(new HttpException((error as Error).message, 500));
  }
}
