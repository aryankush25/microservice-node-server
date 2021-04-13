import fp from 'fastify-plugin';
import { createConnection, getConnectionOptions } from 'typeorm';
import UserRepository from '../repository/UserRepository';

export default fp(async (server) => {
  try {
    const connectionOptions = await getConnectionOptions();

    console.log(`connecting to database: ${connectionOptions.type}...`);
    await createConnection(connectionOptions);
    console.log('database connected');

    const userRepository = new UserRepository();

    server.decorate('db', {
      userRepository,
    });
  } catch (error) {
    console.log(error);

    console.log('make sure you have set .env variables - see .env.sample');
  }
});
