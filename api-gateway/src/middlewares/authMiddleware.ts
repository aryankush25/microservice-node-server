import { NextFunction } from 'express';

import { USER_NOT_AUTHENTICATED_ERROR } from '../common/errors';
import { isNilOrEmpty } from '../utils/helpers';

export const isAuthenticated = async ({ context }, next: NextFunction) => {
  if (isNilOrEmpty(context.user_id)) {
    throw USER_NOT_AUTHENTICATED_ERROR();
  }

  return next();
};
