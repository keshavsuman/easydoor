import HttpResponse from "../../utils/httpResponse";
import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";
import { Types } from "mongoose";

export async function getUserDetails(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.get("id");
    const user = await userService.getUserById(new Types.ObjectId(userId));
    next(new HttpResponse("User fetched successfully", 200, user));
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(new Types.ObjectId(userId));
    next(new HttpResponse("User fetched successfully", 200, user));
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.params.id;
    const user = await userService.updateUserById(
      new Types.ObjectId(userId),
      req.body
    );
    next(new HttpResponse("User updated successfully", 200, user));
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}
