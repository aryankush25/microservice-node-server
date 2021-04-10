import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

import envConfigs from './utils/envConfig';
import UserRepository from './repository/UserRepository';

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string',
          },
        },
      },
    },
  },
};

createConnection()
  .then(() => {
    const server: FastifyInstance = Fastify({});

    const userRepository = new UserRepository();

    const port = envConfigs.port || 7000;

    server.get('/ping', opts, async (request, reply) => {
      return { pong: 'it worked!' };
    });

    server.post('/user', async (request, reply) => {
      const user = await userRepository.createUser(request.body['name'], request.body['email']);

      return user;
    });

    server.get('/user/:email', async (request, reply) => {
      const user = await userRepository.getUser({ where: { email: request.params['email'] } });

      return user;
    });

    // start fastify server
    server.listen(port, (err, address) => {
      if (err) {
        server.log.error(err);
        process.exit(1);
      }

      server.log.info(`server listening on ${address}`);
      console.log('Server is up at user-> ' + `http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.error('Connection Error -> ', error);
  });
