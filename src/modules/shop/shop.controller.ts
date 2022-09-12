import { Request, Response } from "express";

export async function createShop(req: Request, res: Response) {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}
