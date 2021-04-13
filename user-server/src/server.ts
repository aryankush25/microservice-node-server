import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import 'reflect-metadata';

import Routes, { RoutesPayload } from './routes';
import db from './plugins/db';

const createServer = () => {
  const server: FastifyInstance = Fastify({});

  server.register(db);

  // Server check
  server.get('/ping', async (request, reply) => {
    return { pong: 'it worked!' };
  });

  // register routes
  Routes.forEach((route: RoutesPayload) => {
    server.route({
      method: route.method,
      url: route.route,
      handler: async (request: FastifyRequest, reply: FastifyReply) => {
        const controller = route.controller();
        const controllerFunction = controller[route.action];

        const result = await controllerFunction(server, request, reply);

        return result;
      },
      schema: route.schema,
    });
  });

  return server;
};

export default createServer;
