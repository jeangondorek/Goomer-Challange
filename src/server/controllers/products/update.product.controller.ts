import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const updateProduct: RequestHandler = async (req, res) => {
  try {
    const db = await openDB();
    const { id } = req.params;
    const { restaurantId } = req.query;

    // Verifica se o restaurantId está presente na URL
    if (!restaurantId) {
      res.sendStatus(400); // O restaurante não foi fornecido
      return;
    }

    let query = 'UPDATE products SET ';
    const values = [];
    let fieldsToUpdate = 0;

    const { name, description, precopromo, promo, preco, diasempromo, image } = req.body;

    if (name) {
      query += 'name = ?, ';
      values.push(name);
      fieldsToUpdate++;
    }

    if (description) {
      query += 'description = ?, ';
      values.push(description);
      fieldsToUpdate++;
    }

    if (precopromo) {
      query += 'precopromo = ?, ';
      values.push(precopromo);
      fieldsToUpdate++;
    }

    if (promo) {
      query += 'promo = ?, ';
      values.push(promo);
      fieldsToUpdate++;
    }

    if (preco) {
      query += 'preco = ?, ';
      values.push(preco);
      fieldsToUpdate++;
    }

    if (diasempromo) {
      query += 'diasempromo = ?, ';
      values.push(diasempromo);
      fieldsToUpdate++;
    }

    if (image) {
      query += 'image = ?, ';
      values.push(image);
      fieldsToUpdate++;
    }

    if (fieldsToUpdate === 0) {
      res.sendStatus(400); // Nenhum campo fornecido para atualização
      return;
    }

    query = query.slice(0, -2); // Remover a vírgula extra no final
    query += ' WHERE id = ? AND restaurant_id = ?';
    values.push(id, restaurantId);

    db.run(query, values);
    db.close();
    res.sendStatus(200); // Envie uma resposta de sucesso para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
