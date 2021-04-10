import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import envConfigs from './utils/envConfig';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = envConfigs.port;

app.listen({ port: PORT }, () => console.log('Now browse to http://localhost:' + PORT + server.graphqlPath));
