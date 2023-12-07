import mongoose, { Schema, Document } from "mongoose";
import { OTP } from "./dto/createUser.dto";

export enum Gender {
  Male = "male",
  Female = "female",
  NonBinary = "nonBinary",
  PreferNotToSay = "preferNotToSay",
}

export enum SexualOrientation {
  Straight = "straight",
  Gay = "gay",
  Lesbian = "lesbian",
  Bisexual = "bisexual",
  Asexual = "asexual",
  Demisexual = "demisexual",
  Pansexual = "pansexual",
  Queer = "queer",
  Bicurious = "bicurious",
  Aromatic = "aromatic",
  PreferNotToSay = "preferNotToSay",
}

export enum IntrestedIn {
  Men = "men",
  Women = "women",
  NotBinary = "notBinary",
  Everyone = "everyone",
}

export enum RelationshipType {
  LongTerm = "longTerm",
  ShortTerm = "shortTerm",
  LongTermOpenToShort = "longTermOpenToShort",
  ShortTermOpenToLong = "shortTermOpenToLong",
  NewFriends = "newFriends",
  StillFiguringOut = "stillFiguringOut",
}
export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: string;
  isProfileCompleted: boolean;
  isEmailVerified: boolean;
  otp: OTP;
  updatedAt: Date;
  createdAt: Date;
}

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    dob: {
      value: {
        type: Date,
      },
      isVisible: {
        type: Boolean,
        default: true,
      },
    },
    gender: {
      value: {
        type: String,
        enum: Gender,
      },
      isVisible: {
        type: Boolean,
        default: true,
      },
    },
    sexualOrientation: {
      value: {
        type: [{ type: String, enum: SexualOrientation }],
      },
      isVisible: {
        type: Boolean,
        default: true,
      },
    },
    intrestedIn: {
      value: {
        type: [{ type: String, enum: SexualOrientation }],
      },
      isVisible: {
        type: Boolean,
        default: true,
      },
    },
    relationshipType: {
      value: {
        type: [{ type: String, enum: RelationshipType }],
      },
      isVisible: {
        type: Boolean,
        default: true,
      },
    },
    intrests: {
      value: {
        type: [String],
      },
      isVisible: {
        type: Boolean,
        default: true,
      },
    },
    images: {
      type: [String],
    },
    password: {
      type: String,
    },
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      otp: {
        type: String,
      },
      createdAt: {
        type: Date,
      },
      updatedAt: {
        type: Date,
      },
    },
    role: {
      type: String,
      default: "user",
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
export default mongoose.model<User>("user", userSchema);
