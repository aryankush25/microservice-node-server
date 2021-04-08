import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

import envConfigs from './utils/envConfig';

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

    const port = envConfigs.port || 7000;

    server.get('/ping', opts, async (request, reply) => {
      console.log('Yo yo');

      return { pong: 'it worked!' };
    });

    server.post('/user', opts, async (request, reply) => {
      return { pong: 'it worked!' };
    });
    server.get('/ping', opts, async (request, reply) => {
      console.log('Yo yo');

      return { pong: 'it worked!' };
    });

    // start fastify server
    server.listen(port, (err, address) => {
      if (err) {
        server.log.error(err);
        process.exit(1);
      }

      server.log.info(`server listening on ${address}`);
      console.log('Server is up at -> ' + `http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.error('Connection Error -> ', error);
  });
