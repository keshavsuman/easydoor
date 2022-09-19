import { Response, Request, NextFunction } from "express";
import * as authenticationService from "./authentication.service";
import CreateMerchantDto from "./dto/createMerchant.dto";
import CreateAdminDto from "./dto/createAdmin.dto";
import { Admin } from "./admin.model";
import CreateUserDto from "./dto/createUser.dto";
import { User } from "./user.model";
import HttpResponse from "../../utils/httpResponse";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const role = req.params.role;
    const { email, password } = req.body;
    switch (role) {
      case "admin":
        const admin: Admin | null = await authenticationService.getAdminByEmail(
          email
        );
        if (admin) {
          if (
            await authenticationService.verifyPassword(password, admin.password)
          ) {
            next(
              new HttpResponse("Admin loggedin successfully", 200, {
                admin,
                token: authenticationService.generateToken(admin.toJSON()),
              })
            );
          } else {
            next(new HttpResponse("Password mismatched", 400));
          }
        } else {
          next(new HttpResponse("Admin doesn't exists with this email", 400));
        }
        break;
      case "user":
        const user = await authenticationService.getUserByEmail(email);
        if (user) {
          if (
            await authenticationService.verifyPassword(password, user.password)
          ) {
            next(
              new HttpResponse("User loggedin successfully", 200, {
                user,
                token: authenticationService.generateToken(user.toJSON()),
              })
            );
          } else {
            next(new HttpResponse("Password doesn't matched", 400));
          }
        } else {
          next(new HttpResponse("User with this email doesn't exists", 400));
        }
        break;
      case "merchant":
        const merchant = await authenticationService.getMerchantByEmail(email);
        if (merchant) {
          if (
            authenticationService.verifyPassword(password, merchant.password)
          ) {
            next(
              new HttpResponse("Merchant loggedin successfully", 200, {
                merchant,
                token: authenticationService.generateToken(merchant.toJSON()),
              })
            );
          } else {
            next(new HttpResponse("Password mismatched", 400));
          }
        } else {
          next(
            new HttpResponse("Merchant with this email Id doesn't exists", 400)
          );
        }
        break;
      default:
        next(new HttpResponse("User type not supportable", 400));
        break;
    }
  } catch (error) {
    next(new HttpResponse((error as Error).message, 500));
  }
}

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const role = req.params.role;
    const { name, email, password } = req.body;
    switch (role) {
      case "admin":
        if (await authenticationService.getAdminByEmail(email)) {
          next(new HttpResponse("Admin with this email already exists", 400));
        } else {
          const createAdminDto: CreateAdminDto = new CreateAdminDto(
            name,
            email,
            authenticationService.hashPassword(password)
          );
          const admin = await authenticationService.createAdmin(createAdminDto);
          res.status(200).send({
            data: {
              token: authenticationService.generateToken(admin.toJSON()),
              user: admin,
            },
          });
        }
        break;
      case "user":
        if (await authenticationService.getUserByEmail(email)) {
          res.status(400).send({
            status: 400,
            message: "User with this email already exists",
          });
        } else {
          const createUserDto: CreateUserDto = new CreateUserDto(
            name,
            email,
            authenticationService.hashPassword(password)
          );
          const user: User = await authenticationService.createUser(
            createUserDto
          );
          res.status(200).send({
            data: {
              token: authenticationService.generateToken(user.toJSON()),
              user: user,
            },
          });
        }
        break;
      case "merchant":
        if (await authenticationService.getMerchantByEmail(email)) {
          res.status(400).send({
            status: 400,
            message: "Mercant with this email already exists",
          });
        } else {
          const createMerchantDto: CreateMerchantDto = new CreateMerchantDto(
            name,
            email,
            authenticationService.hashPassword(password)
          );
          const merchant = await authenticationService.createMerchant(
            createMerchantDto
          );
          res.status(200).send({
            data: {
              token: authenticationService.generateToken(merchant.toJSON()),
              user: merchant,
            },
          });
        }
        break;
      default:
        res.status(400).send({
          message: "User type is not supported",
        });
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function socialLogin(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send();
  }
}
