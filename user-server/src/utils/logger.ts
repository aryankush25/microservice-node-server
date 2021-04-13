import winston, { format, transports } from 'winston';
import os from 'os';
import { SyslogTransportOptions, Syslog } from 'winston-syslog';

export const initLogger = (appName: string) => {
  const opt: SyslogTransportOptions = {
    host: 'logs.papertrailapp.com',
    port: 41934,
    protocol: 'tls4',
    localhost: os.hostname(),
    eol: '\n',
  };

  winston.loggers.add('default', {
    level: 'info',

    levels: Object.assign({ fatal: 0, warn: 4, trace: 7 }, winston.config.syslog.levels),
    format: format.combine(format.splat(), format.json()),
    defaultMeta: { service: appName + '_' + (process.env.NODE_ENV || 'development') },
    transports: [new Syslog(opt)],
  });

  var logger = winston.loggers.get('default');

  if (process.env.NODE_ENV !== 'production') {
    logger.add(
      new transports.Console({
        format: format.simple(),
        handleExceptions: true,
      }),
    );
  }

  process.on('uncaughtException', function (err) {
    console.log('UncaughtException processing: %s', err);
  });

  logger.child = function () {
    return winston.loggers.get('default');
  };

  return logger;
};
