import { createApplication } from 'graphql-modules';

import UserModule from './users';

const graphqlModule = createApplication({
  modules: [UserModule],
});

export default graphqlModule;
