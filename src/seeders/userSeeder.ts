import { faker } from "@faker-js/faker";
import userModel, { User } from "../modules/authentications/user.model";
import { hashPassword } from "../modules/authentications/authentication.service";
import mongoose from "mongoose";

export default async function CreateFakeUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const user: User = await userModel.create({
    email: faker.internet.email(firstName, lastName),
    lastName: lastName,
    firstName: firstName,
    password: hashPassword(faker.internet.password()),
  });
  return user;
}

async function init() {
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });
  CreateFakeUser();
}

// init();
