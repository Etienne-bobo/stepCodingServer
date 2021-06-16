module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        srv: true,
        uri: env('DATABASE_URI'),
        port: env.int('DATABASE_PORT', 27017),
        database: 'stepCoding-server',
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: true,
      },
    },
  },
});
    