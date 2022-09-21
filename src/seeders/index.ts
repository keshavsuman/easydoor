import merchantModel, {
  Merchant,
} from "../modules/authentications/merchant.model";
import { User } from "../modules/authentications/user.model";
import createFakeAddress from "./addressSeeder";
import CreateFakeMerchant from "./merchantSeeder";
import CreateFakeShop from "./shopSeeder";
import CreateFakeUser from "./userSeeder";
import mongoose from "mongoose";

const MERCHANT_COUNT = 200;
const USER_COUNT = 1000;
const SHOP_COUNT = 150;

async function init() {
  const merchants: Array<Merchant> = [];
  const users: Array<User> = [];
  mongoose.connect(
    "mongodb+srv://keshavsuman:8F4aPQhXD6Td6dn@chat-application.pqjjm.mongodb.net/easydoor"
  );
  mongoose.connection.on("connected", async () => {
    console.log("connected to mongodb");
    try {
      console.info("Creating fake merchants...");
      for (let i = 0; i < MERCHANT_COUNT; i++) {
        merchants.push(await CreateFakeMerchant());
      }

      console.info("Creating fake addresses for merchants...");
      merchants.forEach(async (merch) => {
        await createFakeAddress(merch._id);
      });
      console.info("Creating fake users...");
      for (let i = 0; i < USER_COUNT; i++) {
        users.push(await CreateFakeUser());
      }

      console.info("Creating fake addresses's for users...");
      users.forEach(async (user) => {
        await createFakeAddress(user._id);
      });
      for (let i = 0; i < SHOP_COUNT; i++) {
        const merchant: Merchant[] = await merchantModel.aggregate([
          { $sample: { size: 1 } },
        ]);
        await CreateFakeShop(merchant[0]._id);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

init();
