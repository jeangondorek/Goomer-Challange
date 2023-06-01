import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const { name, description, precopromo, promo, preco, diasempromo, image, category, restaurantid } = req.body;

    const db = await openDB();
    
    // Verifica se o restaurante com o restaurant_id fornecido existe
    const existingRestaurant = await db.get('SELECT id FROM restaurant WHERE id = ?', [restaurantid]);
    if (!existingRestaurant) {
      return res.status(404).json({ error: 'Restaurante não encontrado' });
    }

    const resposta = await db.run('INSERT INTO products (name, description, precopromo, promo, preco, diasempromo, image, category, restaurant_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)', [
      name,
      description,
      precopromo,
      promo,
      preco,
      diasempromo,
      image,
      category,
      restaurantid
    ]);
    
    console.log(resposta);
    db.close();
    res.sendStatus(200); // Envie uma resposta de sucesso para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
