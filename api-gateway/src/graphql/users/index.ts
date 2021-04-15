import { createModule } from 'graphql-modules';

import { UserServiceProvider } from '../../common/providers/UserServiceProvider';
import { isAuthenticated } from '../../middlewares';
import { UserProvider } from './providers/UserProvider';
import { QueryResolver, MutationResolver } from './resolvers';
import schema from './schema';

const resolvers = {
  ...QueryResolver,
  ...MutationResolver,
};

const AdminUserModule = createModule({
  id: 'user-module',
  typeDefs: schema,
  resolvers,
  middlewares: {
    Query: {
      me: [isAuthenticated],
    },
  },
  providers: [UserProvider, UserServiceProvider],
});

export default AdminUserModule;
