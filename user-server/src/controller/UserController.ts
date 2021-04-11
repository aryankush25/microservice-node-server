import { FastifyReply, FastifyRequest } from 'fastify';
import { ArgumentsDoesNotExistError, UserDoesNotExistError } from '../errors';
import UserRepository from '../repository/UserRepository';
import { isNilOrEmpty } from '../utils/helpers';

export class UserController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userRepository = new UserRepository();

      const name = request.body['name'];
      const email = request.body['email'];

      if (isNilOrEmpty(email) || isNilOrEmpty(name)) {
        throw ArgumentsDoesNotExistError();
      }

      const user = await userRepository.createUser(name, email);

      return user;
    } catch (error) {
      return error;
    }
  }

  async me(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userRepository = new UserRepository();

      const email = request.params['email'];

      if (isNilOrEmpty(email)) {
        throw ArgumentsDoesNotExistError();
      }

      const user = await userRepository.getUser({ where: { email } });

      if (isNilOrEmpty(user)) {
        throw UserDoesNotExistError();
      }

      return user;
    } catch (error) {
      return error;
    }
  }
}
