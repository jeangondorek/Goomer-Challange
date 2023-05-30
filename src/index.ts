import { server } from './server/server';
import 'dotenv/config';

const port = process.env.PORT ?? 3000;
const env = process.env.NODE_ENV ?? 'development';

server.listen(port, () => {console.log(
  `App rodando na porta ${port} in ${env} mode`);
});