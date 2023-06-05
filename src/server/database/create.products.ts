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
      horariosempromo TEXT,
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

// Função para validar a presença dos campos quando promo for true
export function validatePromoFields(promo: any, description:any, precopromo: any, diasempromo: any, horariosempromo: any) {
  if (promo && (!precopromo || !diasempromo || !horariosempromo || !description)) {
    return true;
  }
  if (!promo && (precopromo || diasempromo || horariosempromo || description)) {
    return true;
  }
}