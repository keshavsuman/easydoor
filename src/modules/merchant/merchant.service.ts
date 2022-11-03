import mongoose from "mongoose";
import merchantModel from "../authentications/merchant.model";

export async function updateMerchant(
  merchantId: mongoose.Types.ObjectId,
  updateBody: any
) {
  return await merchantModel.findByIdAndUpdate(merchantId, updateBody, {
    new: true,
  });
}

export async function getMerchantById(merchantId: mongoose.Types.ObjectId) {
  return await merchantModel.findById(merchantId);
}
