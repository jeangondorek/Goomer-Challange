import { createConnection, Connection } from 'typeorm';

const connectToDatabase = async (): Promise<Connection> => {
  const connection = await createConnection({
    type: 'sqlite',
    database: 'src/server/database/database.db',
    entities: [__dirname + 'src/server/entities/*.ts'],
    synchronize: true,
  });

  return connection;
};

export default connectToDatabase;
