import { FastifySchema } from 'fastify';
import userRoutes from './user';
import { UserController } from '../controller/UserController';

export interface RoutesPayload {
  method: 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS';
  route: string;
  controller: typeof UserController;
  action: string;
  schema?: FastifySchema;
}

const Routes: RoutesPayload[] = [...userRoutes];

export default Routes;
