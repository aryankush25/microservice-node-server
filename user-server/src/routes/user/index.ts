import { RoutesPayload } from '../';
import userController from '../../controller/UserController';
import * as schemas from './schema';

const userRoutes: RoutesPayload[] = [
  {
    method: 'POST',
    route: '/user',
    controller: userController,
    action: 'register',
    schema: schemas.registerRoute,
  },
  {
    method: 'GET',
    route: '/user/:email',
    controller: userController,
    action: 'me',
    schema: schemas.meRoute,
  },
];

export default userRoutes;
