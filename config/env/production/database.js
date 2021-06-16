module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_URI', 'stepcoding-cms'),
        username: env('DATABASE_USERNAME', null),
        password: env('DATABASE_PASSWORD', null),
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
    