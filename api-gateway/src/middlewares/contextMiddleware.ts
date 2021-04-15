import { verifyAccessToken } from '../utils/jwt';
import { PayloadInterface } from '../common/types';
import { isNilOrEmpty } from '../utils/helpers';

export const contextMiddleware = ({ req }) => {
  let authToken = req.headers.authorization || '';

  if (authToken) {
    authToken = authToken.split(' ')[1];

    if (authToken) {
      const payload: PayloadInterface = verifyAccessToken(authToken);

      if (!isNilOrEmpty(payload)) {
        return { user_id: payload.data };
      }
    }
  }

  return { user_id: null };
};
