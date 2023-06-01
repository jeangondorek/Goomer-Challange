import { RequestHandler } from 'express';
import { openDB } from '../index.controller';

export const getOneProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do produto
    const { restaurantId } = req.query; // Obtém o ID do restaurante dos parâmetros da consulta

    const db = await openDB();
    const resposta = await db.get('SELECT * FROM products WHERE id = ? AND restaurant_id = ?', [id, restaurantId]);
    db.close();

    if (!resposta) {
      res.sendStatus(404); // Produto não encontrado
      return;
    }

    res.status(200).json(resposta); // Envie uma resposta de sucesso com os dados para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
