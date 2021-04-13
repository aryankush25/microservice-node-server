import { FastifySchema } from 'fastify';
import userRoutes from './user';
import userController from '../controller/userController';

export interface RoutesPayload {
  method: 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS';
  route: string;
  controller: typeof userController;
  action: string;
  schema?: FastifySchema;
}

const Routes: RoutesPayload[] = [...userRoutes];

export default Routes;
