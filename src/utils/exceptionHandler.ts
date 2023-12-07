import HttpResponse from "./httpResponse";
import { Request, Response, NextFunction } from "express";

export default function ExceptionHandler(
  exception: HttpResponse,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(exception.statusCode).send({
    statusCode: exception.statusCode,
    message: exception.message,
    data: exception.data,
  });
  next();
}
