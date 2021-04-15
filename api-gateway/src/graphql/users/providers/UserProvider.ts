import { Injectable, Scope, Inject } from 'graphql-modules';

import { UserServiceProvider } from '../../../common/providers/UserServiceProvider';
import { getAccessToken } from '../../../utils/jwt';
import { logger } from '../../../utils/logger';
import { UserInterface, AuthResponseInterface, SignupInterface } from '../../../common/types';
import { USER_NOT_FOUND_ERROR } from '../../../common/errors';

@Injectable({
  scope: Scope.Operation,
})
export class UserProvider {
  constructor(@Inject(UserServiceProvider) private userServiceProvider: UserServiceProvider) {}

  // async login(args: LoginInterface): Promise<AuthResponseInterface> {
  //   const { email, password } = args;

  //   try {
  //     const user: User = await this.dbProvider.user.findOne({
  //       email,
  //     });

  //     if (user) {
  //       const isMatch = await compare(password, user.hashedPassword);

  //       if (!isMatch) {
  //         throw INCORRECT_USER_CREDENTIALS_ERROR();
  //       }

  //       const accessToken = await getAccessToken(user.id);

  //       return {
  //         user,
  //         accessToken,
  //       };
  //     } else {
  //       throw USER_NOT_FOUND_ERROR();
  //     }
  //   } catch (error) {
  //     logger.error(error);

  //     return error;
  //   }
  // }

  async signup(args: SignupInterface): Promise<AuthResponseInterface> {
    const { email, password } = args;

    try {
      const response: UserInterface = await this.userServiceProvider.register(email, password);

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

  async getMe(user_id: string): Promise<UserInterface> {
    try {
      const user: UserInterface = await this.userServiceProvider.getUser(user_id);

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
