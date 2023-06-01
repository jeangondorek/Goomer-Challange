
import { openDB } from './database';

export function createRestaurantTable() {
  openDB().then(db => {
    db.run(`CREATE TABLE IF NOT EXISTS restaurant (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT, 
      foto TEXT, 
      address TEXT, 
      horarios TEXT)`,
    (err: any) => {
      if (err) {
        console.log(err);
      }
    });
  });
}