module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        srv: true,
        uri: env('DATABASE_URI'),
      },
      options: {
        authenticationDatabase: '',
        ssl: true,
      },
    },
  },
});
    