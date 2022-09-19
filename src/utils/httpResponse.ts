export default class HttpResponse extends Error {
  statusCode: number;
  data: any;
  constructor(message: string, statusCode: number, data?: any) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
