import { ApolloError } from 'apollo-server-express';

export const USER_NOT_AUTHENTICATED_ERROR = () => {
  return new ApolloError('User is not authenticated.');
};

export const USER_NOT_FOUND_ERROR = () => {
  return new ApolloError('User not found.');
};

export const USER_ALREADY_EXISTS_ERROR = () => {
  return new ApolloError('User already exists.');
};

export const INCORRECT_USER_CREDENTIALS_ERROR = () => {
  return new ApolloError('Invalid email or password.');
};
