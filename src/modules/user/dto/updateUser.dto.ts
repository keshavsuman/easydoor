import { OTP } from "../../authentications/dto/createUser.dto";

export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export class UpdateUserOtpDto {
  otp: OTP;
  mobileNumber: string;
  constructor(otp: string, mobileNumber: string) {
    this.otp = new OTP(otp);
    this.mobileNumber = mobileNumber;
  }
}
