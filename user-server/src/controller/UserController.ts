import { FastifyReply, FastifyRequest } from 'fastify';
import { ArgumentsDoesNotExistError, UserDoesNotExistError } from '../errors';
import { isNilOrEmpty } from '../utils/helpers';

const userController = () => {
  const register = async (server: any, request: FastifyRequest, reply: FastifyReply) => {
    try {
      const userRepository = server.db.userRepository;

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
  };

  const me = async (server: any, request: FastifyRequest, reply: FastifyReply) => {
    try {
      const userRepository = server.db.userRepository;

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
  };

  return {
    register,
    me,
  };
};

export default userController;
