import Joi from "joi";

export const updateUser = {
  body: Joi.object().keys({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().optional(),
    mobileNumber: Joi.string().optional(),
    dob: Joi.object()
      .keys({
        value: Joi.date().required(),
        isVisible: Joi.boolean().required(),
      })
      .optional(),
    gender: Joi.object()
      .keys({
        value: Joi.string().required(),
        isVisible: Joi.boolean().required(),
      })
      .optional(),
    sexualOrientation: Joi.object()
      .keys({
        value: Joi.string().required(),
        isVisible: Joi.boolean().required(),
      })
      .optional(),
    intrestedIn: Joi.object()
      .keys({
        value: Joi.array().items(Joi.string()).required(),
        isVisible: Joi.boolean().required(),
      })
      .optional(),
    relationshipType: Joi.object()
      .keys({
        value: Joi.array().items(Joi.string()).required(),
        isVisible: Joi.boolean().required(),
      })
      .optional(),
    intrests: Joi.object()
      .keys({
        value: Joi.array().items(Joi.string()).required(),
        isVisible: Joi.boolean().required(),
      })
      .optional(),
  }),
};
