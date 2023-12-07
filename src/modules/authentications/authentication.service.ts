import UserModel, { User } from "./user.model";
import AdminModel, { Admin } from "./admin.model";
import MerchantModel, { Merchant } from "./merchant.model";
import CreateMerchantDto from "./dto/createMerchant.dto";
import CreateAdminDto from "./dto/createAdmin.dto";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import CreateUserDto, { CreateUserByPhoneDto } from "./dto/createUser.dto";

export async function getUserByEmail(email: String): Promise<User | null> {
  const user = await UserModel.findOne({
    email: email,
  });
  return user;
}

export async function getUserByPhone(phone: String): Promise<User | null> {
  const user = await UserModel.findOne({
    mobileNumber: phone,
  });
  return user;
}
// export async function
export function verifyPassword(
  password: string,
  passwordToVerify: string
): Boolean {
  // return bcrypt.compareSync(password, passwordToVerify);
  return true;
}
export function hashPassword(password: string) {
  return bcrypt.hashSync(password);
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

export async function createMerchant(
  createMerhcantDto: CreateMerchantDto
): Promise<Merchant> {
  const merchant = await MerchantModel.create(createMerhcantDto);
  return merchant;
}

export async function createAdmin(
  createMerhcantDto: CreateAdminDto
): Promise<Admin> {
  const merchant = await AdminModel.create(createMerhcantDto);
  return merchant;
}

export async function createUser(createUserDto: CreateUserDto): Promise<User> {
  const merchant = await UserModel.create(createUserDto);
  return merchant;
}

export async function createUserByPhone(
  createUserByPhoneDto: CreateUserByPhoneDto
): Promise<User | null> {
  const user = await UserModel.create(createUserByPhoneDto);
  return user;
}

export function generateToken(object: any) {
  return jsonwebtoken.sign(object, process.env.JWT_SECRET_KEY!);
}

export function generateOTP() {
  if (process.env.NODE_ENV === "development") return 123456;
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}
