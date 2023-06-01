import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const deleteRestaurant: RequestHandler = async (req, res) => {
  try {
    const db = await openDB();

    // Verificar se há produtos associados ao restaurante
    const productsCount = await db.get(
      'SELECT COUNT(*) AS count FROM products WHERE restaurant_id = ?',
      [req.params.id]
    );

    if (productsCount.count > 0) {
      res.status(409).send('Cannot delete restaurant with associated products');
      return;
    }

    // Excluir o restaurante caso não haja produtos associados
    const resposta = await db.run('DELETE FROM restaurant WHERE id = ?', [req.params.id]);

    if (resposta.changes === 0) {
      res.sendStatus(404);
      return;
    }

    db.close();
    res.status(200).send('deleted'); // Envie uma resposta de sucesso com os dados para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
