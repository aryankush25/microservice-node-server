import express from 'express';
import axios from 'axios';
import { ApolloServer, gql } from 'apollo-server-express';
import envConfigs from './utils/envConfig';

const baseUrl = 'http://localhost:5000/';
const userBaseUrl = baseUrl + 'user';

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    hashedPassword: String
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  type Query {
    getUser(email: String): User
  }

  type Mutation {
    createUser(name: String, email: String): User
  }
`;

const resolvers = {
  Query: {
    getUser: async (parent, args) => {
      console.log(args.email);

      const response = await axios.get(userBaseUrl + '/' + args.email);

      return response.data;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const response = await axios.post(userBaseUrl, {
        name: args.name,
        email: args.email,
      });

      return response.data;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = envConfigs.port;

app.listen({ port: PORT }, () => console.log('Now browse to http://localhost:' + PORT + server.graphqlPath));
