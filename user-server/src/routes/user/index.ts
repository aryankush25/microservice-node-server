import { FastifyReply, FastifyRequest } from 'fastify';
import userController from '../../controller/userController';
import { FastifyInstanceExtended } from '../../server';
import * as schemas from './schema';

export const registerUserRoutes = (server: FastifyInstanceExtended) => {
  server.post('/user', { schema: schemas.registerRoute }, (request: FastifyRequest, reply: FastifyReply) => {
    return userController.register(server.db, request, reply);
  });

  server.get('/user/:email', { schema: schemas.meRoute }, (request: FastifyRequest, reply: FastifyReply) => {
    return userController.me(server.db, request, reply);
  });
};
