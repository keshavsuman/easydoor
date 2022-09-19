import mongoose from "mongoose";
import AddressModel, { Address } from "./address.model";

export async function createAddress(address: any): Promise<Address> {
  return await AddressModel.create(address);
}

export async function updateAddress(
  addressId: mongoose.Types.ObjectId,
  address: any
): Promise<Address | null> {
  return await AddressModel.findByIdAndUpdate(addressId, address, {
    new: true,
  });
}

export async function deleteAddress(
  addressId: mongoose.Types.ObjectId
): Promise<Address | null> {
  return await AddressModel.findByIdAndDelete(addressId);
}

export async function getAddress(
  userId: mongoose.Types.ObjectId
): Promise<Address[]> {
  return AddressModel.find({
    userId: userId,
  });
}
