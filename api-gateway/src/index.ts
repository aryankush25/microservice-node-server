import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import envConfigs from './utils/envConfig';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Aryan!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = envConfigs.port;

app.listen({ port: PORT }, () => console.log('Now browse to http://localhost:' + PORT + server.graphqlPath));
