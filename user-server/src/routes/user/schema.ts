import { FastifySchema } from 'fastify';

export const registerRoute: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        hashedPassword: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
        deletedAt: { type: 'string' },
      },
    },
  },
};

export const meRoute: FastifySchema = {
  params: {
    type: 'object',
    required: ['email'],
    properties: {
      email: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        createdAt: { type: 'string' },
        id: { type: 'string' },
        updatedAt: { type: 'string' },
        deletedAt: { type: 'string' },
      },
    },
  },
};
