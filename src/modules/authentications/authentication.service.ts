import UserModel, { User } from "./user.model";
import AdminModel, { Admin } from "./admin.model";
import MerchantModel, { Merchant } from "./merchant.model";

export async function getUserByEmail(email: String): Promise<User | null> {
  const user = await UserModel.findOne({
    email: email,
  });
  return user;
}

// export async function
export function verifyPassword(
  password: string,
  passwordToVerify: string
): Boolean {
  return true;
}

export async function getAdminByEmail(email: String): Promise<Admin | null> {
  const admin = await AdminModel.findOne({
    email: email,
  });
  return admin;
}

export async function getMerchantByEmail(
  email: String
): Promise<Merchant | null> {
  const merchant = await MerchantModel.findOne({
    email: email,
  });
  return merchant;
}
