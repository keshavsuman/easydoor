import { Request, Response, NextFunction } from "express";
import HttpException from "../../utils/httpResponse";

export async function updateCart(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.get("id");
    res.get("role");
  } catch (error) {
    next(new HttpException((error as Error).message, 500));
  }
}
