import Joi, { Schema } from "joi";
import { Request, Response, NextFunction } from "express";
import HttpResponse from "./httpResponse";
import httpStatus from "http-status";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate(object);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");
      return next(new HttpResponse(errorMessage, httpStatus.BAD_REQUEST));
    }
    Object.assign(req, value);
    return next();
  };

export function objectId(value: string, helpers: any) {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
}

/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
export function pick(object: any, keys: string[]): Object {
  return keys.reduce((obj: any, key: string) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
