import { Response, Request } from "express";
import * as authenticationService from "./authentication.service";

export async function login(req: Request, res: Response) {
  try {
    const role = req.params.role;
    const { email, password } = req.body;
    switch (role) {
      case "admin":
        break;
      case "user":
        const user = await authenticationService.getUserByEmail(email);
        if (user) {
          if (
            await authenticationService.verifyPassword(user.password, password)
          ) {
            // res for login success
          } else {
            // res showing password mismatched
          }
        }
        break;
      case "merchant":
        break;
      default:
        break;
    }
  } catch (error) {
    res.status(500).send("");
  }
}

export async function signup(req: Request, res: Response) {
  try {
  } catch (error) {}
}

export async function socialLogin(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send();
  }
}
