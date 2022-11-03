import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import HttpResponse from "../../utils/httpResponse";
import * as orderService from "./order.service";

export async function getOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(res.get("id"));
    const { page, limit, status } = req.query;
    const orders = await orderService.getOrders(
      userId,
      parseInt(page as string, 10),
      parseInt(limit as string, 10),
      status as string
    );
    next(new HttpResponse("My Orders fetched successfully", 200, orders));
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function placeOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = new mongoose.Types.ObjectId(res.get("id"));
    const addressId = new mongoose.Types.ObjectId(req.body.addressId);
    const order = await orderService.placeOrder(
      userId,
      addressId,
      req.body.items
    );
    next(new HttpResponse("My Orders Placed successfully", 201, order));
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
    const orderId = new mongoose.Types.ObjectId(req.params.orderId);
    const updatedOrder = await orderService.updateOrder(orderId, req.body);
    next(new HttpResponse("Orders updated successfully", 200, updatedOrder));
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function updateOrderStatus(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = new mongoose.Types.ObjectId(res.get("id"));
  const orderId = new mongoose.Types.ObjectId(req.params.orderId);
  const order = await orderService.updateOrderStatus(orderId, req.body.status);
  next(new HttpResponse("Order status updated successfully", 200, order));
}
