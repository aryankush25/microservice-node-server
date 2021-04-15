import { Injectable, Scope, Inject } from 'graphql-modules';

import { UserServiceProvider } from '../../../common/providers/UserServiceProvider';
import { getAccessToken } from '../../../utils/jwt';
import { logger } from '../../../utils/logger';
import { UserInterface, AuthResponseInterface, SignupInterface, LoginInterface } from '../../../common/types';
import { USER_NOT_FOUND_ERROR } from '../../../common/errors';

@Injectable({
  scope: Scope.Operation,
})
export class UserProvider {
  constructor(@Inject(UserServiceProvider) private userServiceProvider: UserServiceProvider) {}

  async login(args: LoginInterface): Promise<AuthResponseInterface> {
    const { email, password } = args;

    try {
      const response: UserInterface = await this.userServiceProvider.login(email, password);

      const accessToken = await getAccessToken(response.id);

      return {
        user: response,
        accessToken,
      };
    } catch (error) {
      logger.error(error);

      return error;
    }
  }

  async signup(args: SignupInterface): Promise<AuthResponseInterface> {
    const { name, email, password } = args;

    try {
      const response: UserInterface = await this.userServiceProvider.register(name, email, password);

      const accessToken = await getAccessToken(response.id);

      return {
        user: response,
        accessToken,
      };
    } catch (error) {
      logger.error(error);

      return error;
    }
  }

  async getMe(userId: string): Promise<UserInterface> {
    try {
      const user: UserInterface = await this.userServiceProvider.getUser(userId);

      if (user) {
        return user;
      } else {
        throw USER_NOT_FOUND_ERROR();
      }
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
}
