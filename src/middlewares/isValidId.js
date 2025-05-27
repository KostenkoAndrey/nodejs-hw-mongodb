import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
};

export const isValidEthAddress = (req, res, next) => {
  const { wallet } = req.params;
  if (!/^0x[a-fA-F0-9]{40}$/.test(wallet)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
};
