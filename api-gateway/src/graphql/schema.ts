import { gql } from 'apollo-server-express';

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

export default typeDefs;
