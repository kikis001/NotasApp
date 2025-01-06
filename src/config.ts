import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      connection: process.env.MONGO_CONNECTION,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      host: process.env.MONGO_HOST,
      dbName: process.env.MONGO_DB,
    },
    jwt: process.env.JWT_SECRET,
  };
});
