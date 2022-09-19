import jsonwebtoken from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

async function authToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      message: "Token not provided",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded: any = jsonwebtoken.verify(
      token,
      process.env.JWT_SECRET_KEY!
    );
    res.set("role", decoded.role);
    res.set("id", decoded.id);
    return next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: "Token invalid",
    });
  }
}

export default authToken;
