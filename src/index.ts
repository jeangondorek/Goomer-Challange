import { openDB } from './server/database/database';
import 'reflect-metadata';
import { server } from './server/server';
import 'dotenv/config';
import { createRestaurantTable } from './server/database/create.restaurant';
import { createProductTable } from './server/database/create.products';

const port = process.env.PORT ?? 3000;
const env = process.env.NODE_ENV ?? 'development';

openDB().then(() => console.log('Banco de dados conectado com sucesso!'));
createProductTable();
createRestaurantTable();

server.listen(port, () => {
  console.log(`Server running on port ${port} in ${env} mode`);
});