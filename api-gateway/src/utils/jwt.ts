import { verify, sign } from 'jsonwebtoken';

import { logger } from './logger';
import envConfigs from './envConfig';
import { PayloadInterface } from '../common/types';

export async function getAccessToken(user_id: String): Promise<string> {
  const accessToken: string = sign(
    {
      data: user_id,
    },
    envConfigs.jwtSecret,
    {
      expiresIn: '24h',
    },
  );

  return accessToken;
}

export function verifyAccessToken(accessToken: string): PayloadInterface | null {
  try {
    const payload = verify(accessToken, envConfigs.jwtSecret) as PayloadInterface;

    return payload;
  } catch (error) {
    logger.error('getAccessToken:: Invalid accessToken provided');

    return null;
  }
}
