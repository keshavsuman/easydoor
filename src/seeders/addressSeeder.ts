import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import addressModel from "../modules/address/address.model";

export default async function createFakeAddress(user: mongoose.Types.ObjectId) {
  const data = await addressModel.create({
    lane1: faker.address.street(),
    lane2: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    pincode: faker.address.zipCode(),
    location: [faker.address.longitude, faker.address.latitude],
    user: user,
  });
}
