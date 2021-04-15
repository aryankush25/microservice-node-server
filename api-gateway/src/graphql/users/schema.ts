import { gql } from 'graphql-modules';

const schema = gql`
  type User {
    id: String!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String
    deletedAt: String
  }

  type authResponse {
    user: User!
    accessToken: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): authResponse!
    login(email: String!, password: String!): authResponse!
  }
`;

export default schema;
