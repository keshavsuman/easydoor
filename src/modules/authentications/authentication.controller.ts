import { Response, Request, NextFunction } from "express";
import * as authenticationService from "./authentication.service";
import CreateMerchantDto from "./dto/createMerchant.dto";
import CreateAdminDto from "./dto/createAdmin.dto";
import { Admin } from "./admin.model";
import CreateUserDto from "./dto/createUser.dto";
import { User } from "./user.model";

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
            await authenticationService.verifyPassword(admin.password, password)
          ) {
            res.status(200).send({
              status: 200,
              message: "Admin loggedin successfully",
              data: {
                admin,
                token: authenticationService.generateToken(admin),
              },
            });
          } else {
            res.status(400).send({
              message: "Password mismatched",
              status: 400,
            });
          }
        } else {
          res.status(400).send({
            message: "Admin doesn't exists with this email",
            status: 400,
          });
        }
        break;
      case "user":
        const user = await authenticationService.getUserByEmail(email);
        if (user) {
          if (
            await authenticationService.verifyPassword(user.password, password)
          ) {
            res.status(200).send({
              status: 200,
              message: "User loggedin successfully",
              data: {
                user,
                token: authenticationService.generateToken(user),
              },
            });
          } else {
            res.status(400).send({
              message: "Password doesn't matched",
              status: 400,
            });
          }
        } else {
          res.status(400).send({
            message: "User with this email doesn't exists",
            status: 400,
          });
        }
        break;
      case "merchant":
        const merchant = await authenticationService.getMerchantByEmail(email);
        if (merchant) {
          if (
            authenticationService.verifyPassword(merchant.password, password)
          ) {
            res.status(200).send({
              status: 200,
              message: "Merchant loggedin successfully",
              data: {
                merchant,
                token: authenticationService.generateToken(merchant),
              },
            });
          } else {
            res.status(400).send({
              message: "Password mismatched",
              status: 400,
            });
          }
        } else {
          res.status(400).send({
            message: "Merchant with this email Id doesn't exists",
            status: 400,
          });
        }
        break;
      default:
        res.status(400).send({
          message: "User type not supportable",
          status: 400,
        });
        break;
    }
  } catch (error) {
    res.status(500).send("");
  }
}

export async function signup(req: Request, res: Response) {
  try {
    const role = req.params.role;
    const { name, email, password } = req.body;
    switch (role) {
      case "admin":
        if (await authenticationService.getAdminByEmail(email)) {
          res.status(400).send({
            status: 400,
            message: "Admin with this email already exists",
          });
        } else {
          const createAdminDto: CreateAdminDto = new CreateAdminDto(
            name,
            email,
            password
          );
          const admin = await authenticationService.createAdmin(createAdminDto);
          res.status(200).send({
            data: {
              token: authenticationService.generateToken(admin.toObject()),
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
            password
          );
          const user: User = await authenticationService.createUser(
            createUserDto
          );
          res.status(200).send({
            data: {
              token: authenticationService.generateToken(user.toObject()),
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
            password
          );
          const merchant = await authenticationService.createMerchant(
            createMerchantDto
          );
          res.status(200).send({
            data: {
              token: authenticationService.generateToken(merchant.toObject()),
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
