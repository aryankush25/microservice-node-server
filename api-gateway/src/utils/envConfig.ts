const { PORT, JWT_SECRET } = process.env;

export default {
  port: Number(PORT),
  jwtSecret: JWT_SECRET || 'jwt-secret',
};
