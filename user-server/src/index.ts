import Fastify, { FastifyInstance, RouteShorthandOptions, FastifyReply, FastifyRequest } from 'fastify';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

import envConfigs from './utils/envConfig';
import Routes, { RoutesPayload } from './routes';

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

    // Server check
    server.get('/ping', opts, async (request, reply) => {
      return { pong: 'it worked!' };
    });

    // register routes
    Routes.forEach((route: RoutesPayload) => {
      server.route({
        method: route.method,
        url: route.route,
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
          const controller = new route.controller();
          const controllerFunction = controller[route.action];

          const result = await controllerFunction(request, reply);

          return result;
        },
        schema: route.schema,
      });
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
