export class OTP {
  otp: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(otp: string) {
    this.otp = otp;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
export default class CreateUserDto {
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

export class CreateUserByPhoneDto {
  otp: OTP;
  mobileNumber: string;

  constructor(otp: string, mobileNumber: string) {
    this.mobileNumber = mobileNumber;
    this.otp = new OTP(otp);
  }
}
