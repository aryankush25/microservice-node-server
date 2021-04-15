import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { createServer } from 'http';

import envConfigs from './utils/envConfig';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { logger } from './utils/logger';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(cors());

//For Health Check
app.get('/', (req, res) => {
  res.send('Health check');
});

server.applyMiddleware({ app });

const graphqlServer = createServer(app);

const PORT = envConfigs.port;

// Start listening for requests.
graphqlServer.listen({ port: PORT }, async () => {
  logger.info(`Server is up and running on http://localhost:${PORT}/graphql`);
});
