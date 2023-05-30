import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

export const server = express();

server.use(cors());

server.use(express.json());

server.get('/', (req, res) => {
  return res.send('Hello World!');
});

server.use(router);
