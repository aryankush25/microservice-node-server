import express from 'express';

import { USER_NOT_AUTHENTICATED_ERROR } from '../errors';
import { isNilOrEmpty } from '../utils/helpers';

export const isAuthenticated = async ({ context }, next: express.NextFunction) => {
  if (isNilOrEmpty(context.user_id)) {
    throw USER_NOT_AUTHENTICATED_ERROR();
  }

  return next();
};
