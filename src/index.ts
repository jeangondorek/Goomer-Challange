import connectToDatabase from './server/database/database';
import 'reflect-metadata';
import { server } from './server/server';
import 'dotenv/config';

const port = process.env.PORT ?? 3000;
const env = process.env.NODE_ENV ?? 'development';

connectToDatabase()
  .then(() => {
    server.listen(port, () => {console.log(
      `App rodando na porta ${port} in ${env} mode`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });