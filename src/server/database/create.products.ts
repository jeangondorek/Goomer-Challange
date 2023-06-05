import { openDB } from './database';

export function createProductTable() {
  openDB().then(db => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT NOT NULL, 
      promo BOOLEAN NOT NULL, 
      preco NUMERIC NOT NULL, 
      description TEXT, 
      precopromo NUMERIC,
      diasempromo TEXT,
      horarioIniciopromo DATE,
      horarioFimpromo DATE,
      image TEXT,
      category TEXT,
      restaurant_id INTEGER,
      FOREIGN KEY (restaurant_id) REFERENCES restaurant (id))`,
    (err: string) => {
      if (err) {
        console.log(err);
      }
    });
  });
}