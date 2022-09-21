import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import shopModel, { Shop } from "../modules/shop/shop.model";

export default async function CreateFakeShop(
  merchantId: mongoose.Types.ObjectId
) {
  const shop: Shop = await shopModel.create({
    name: faker.company.name(),
    description: faker.company.bs(),
    location: [faker.address.latitude, faker.address.longitude],
    logo: faker.image.business(),
    merchant: merchantId,
    contactNumber: faker.phone.number("+91##########"),
  });
  return shop;
}

async function init() {
  //   mongoose.connect(
  //     "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  //   );
  //   mongoose.connection.on("connected", () => {
  //     console.log("connected to mongodb");
  //   });
  for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
    // await CreateShop();
  }
}

// init();
