import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().pattern(/^\+?\d{7,15}$/).required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid("work", "home", "personal").optional(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().pattern(/^\+?\d{7,15}$/),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid("work", "home", "personal").optional(),
});