import userModel, { User } from "../authentications/user.model";
import { UpdateUserDto, UpdateUserOtpDto } from "./dto/updateUser.dto";
import { Types } from "mongoose";

export async function getUserById(
  userId: Types.ObjectId
): Promise<User | null> {
  const user = await userModel.findById(userId);
  return user;
}

export async function updateUserById(
  userId: Types.ObjectId,
  updateUserDto: UpdateUserDto
): Promise<User | null> {
  const user = await userModel.findByIdAndUpdate(userId, updateUserDto, {
    new: true,
  });
  return user;
}

export async function updateUserOtp(
  userId: Types.ObjectId,
  updateUserOtpDto: UpdateUserOtpDto
): Promise<User | null> {
  const user = await userModel.findByIdAndUpdate(userId, updateUserOtpDto, {
    new: true,
  });
  return user;
}
