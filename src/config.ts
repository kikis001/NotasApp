import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      connection: process.env.MONGO_CONNECTION,
    },
  };
});
