export default class CreateMerchantDto {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
