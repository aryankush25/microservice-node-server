import { FastifyReply, FastifyRequest } from 'fastify';
import { DBInterface } from '../plugins/db';
import { ArgumentsDoesNotExistError, UserDoesNotExistError } from '../errors';
import { isNilOrEmpty } from '../utils/helpers';

const userController = {
  register: async (db: DBInterface, request: FastifyRequest, reply: FastifyReply) => {
    const userRepository = db.userRepository;

    const name = request.body['name'];
    const email = request.body['email'];

    const user = await userRepository.createUser(name, email);

    return user;
  },

  me: async (db: DBInterface, request: FastifyRequest, reply: FastifyReply) => {
    const userRepository = db.userRepository;

    const email = request.params['email'];

    if (isNilOrEmpty(email)) {
      throw ArgumentsDoesNotExistError();
    }

    const user = await userRepository.getUser({ where: { email } });

    if (isNilOrEmpty(user)) {
      throw UserDoesNotExistError();
    }

    return user;
  },
};

export default userController;
