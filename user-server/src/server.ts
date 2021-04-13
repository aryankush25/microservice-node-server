import Fastify, { FastifyInstance } from 'fastify';
import 'reflect-metadata';

import db, { DBInterface } from './plugins/db';
import { registerUserRoutes } from './routes/user';
import { initLogger } from './utils/logger';

export interface FastifyInstanceExtended extends FastifyInstance {
  db: DBInterface;
}

const createServer = () => {
  const server: FastifyInstance = Fastify({ logger: initLogger('user-server') });

  server.register(db);

  // Server check
  server.get('/ping', async (request, reply) => {
    return { pong: 'it worked!' };
  });

  const extendedServer: any = server;

  registerUserRoutes(extendedServer);

  return server;
};

export default createServer;
