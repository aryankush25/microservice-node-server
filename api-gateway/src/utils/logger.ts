import { createLogger, format, transports } from 'winston';

const simpleTimestamp = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    simpleTimestamp,
  ),
  defaultMeta: { service: 'api-gateway-logger' },
  transports: [new transports.Console()],
});
