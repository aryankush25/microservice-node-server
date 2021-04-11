import { RoutesPayload } from '../';
import { UserController } from '../../controller/UserController';
import * as schemas from './schema';

const userRoutes: RoutesPayload[] = [
  {
    method: 'POST',
    route: '/user',
    controller: UserController,
    action: 'register',
    schema: schemas.registerRoute,
  },
  {
    method: 'GET',
    route: '/user/:email',
    controller: UserController,
    action: 'me',
    schema: schemas.meRoute,
  },
];

export default userRoutes;
