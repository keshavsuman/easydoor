import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import HttpResponse from "../../utils/httpResponse";

export async function placeOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(res.get("id"));
    const data = req.body;
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function updateOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(res.get("id"));
    const data = req.body;
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function cancelOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(res.get("id"));
    const data = req.body;
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}
