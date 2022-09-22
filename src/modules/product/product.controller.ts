import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import HttpResponse from "../../utils/httpResponse";
import * as productService from "./product.service";

export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {}
export async function getProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;
    const category = await productService.createCategory(body);
    return category;
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}
export async function createSubCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;
    const subcategory = await productService.createSubCategory(body);
    next(
      new HttpResponse("Subcategory created successfully", 200, subcategory)
    );
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function updateSubCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;
    const subcategory = await productService.updateSubCategory(
      new mongoose.Types.ObjectId(req.params.id),
      body
    );
    next(
      new HttpResponse("Sub category deleted successfully", 200, subcategory)
    );
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function deleteSubCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const subcategory = await productService.deleteSubCategory(
      new mongoose.Types.ObjectId(req.params.id)
    );
    next(
      new HttpResponse("Sub category deleted successfully", 200, subcategory)
    );
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}
