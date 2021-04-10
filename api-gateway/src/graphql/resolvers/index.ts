import users from './users';

const resolvers = {
  Query: {
    ...users.userQueries,
  },
  Mutation: {
    ...users.userMutations,
  },
  ...users.userResolvers,
};

export default resolvers;
