import { openDB } from './database';

export function createProductTable() {
  openDB().then(db => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT, 
      description TEXT, 
      precopromo NUMERIC,
      promo TEXT, 
      preco NUMERIC, 
      diasempromo TEXT,
      image TEXT,
      category TEXT,
      restaurant_id INTEGER,
      FOREIGN KEY (restaurant_id) REFERENCES restaurant (id))`,
    (err: any) => {
      if (err) {
        console.log(err);
      }
    });
  });
}
