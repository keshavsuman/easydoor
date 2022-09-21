import { faker } from "@faker-js/faker";
import merchantModel from "../modules/authentications/merchant.model";
import { hashPassword } from "../modules/authentications/authentication.service";
import mongoose from "mongoose";
import { Merchant } from "../modules/authentications/merchant.model";

export default async function CreateFakeMerchant() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const merchant: Merchant = await merchantModel.create({
    email: faker.internet.email(firstName, lastName),
    lastName: lastName,
    firstName: firstName,
    password: hashPassword(faker.internet.password()),
  });
  return merchant;
}

async function init() {
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });
  CreateFakeMerchant();
}

// init();
