import mongoose from "mongoose";
import orderModel from "./order.model";

export async function placeOrder(
  userId: mongoose.Types.ObjectId,
  addressId: mongoose.Types.ObjectId,
  items: any
) {
  return await orderModel.create({
    user: userId,
    addressId: addressId,
    items: items,
  });
}

export async function updateOrder(
  orderId: mongoose.Types.ObjectId,
  orderObject: any
) {
  return await orderModel.findByIdAndUpdate(orderId, orderObject, {
    new: true,
  });
}

export async function getOrders(
  userId: mongoose.Types.ObjectId,
  page: number,
  limit: number,
  status: string
) {
  return await orderModel
    .find({
      user: userId,
      status: status,
    })
    .limit(limit)
    .skip((page - 1) * limit);
}

export async function updateOrderStatus(
  orderId: mongoose.Types.ObjectId,
  status: string
) {
  return await orderModel.findByIdAndUpdate(
    orderId,
    { status: status },
    { new: true }
  );
}
