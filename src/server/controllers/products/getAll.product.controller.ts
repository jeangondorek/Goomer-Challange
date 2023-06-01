import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const getAllProduct: RequestHandler = async (req, res) => {
  try {
    const { restaurantId } = req.query; // Obtém o ID do restaurante dos parâmetros da consulta

    const db = await openDB();
    const resposta = await db.all('SELECT * FROM products WHERE restaurant_id = ?', [restaurantId]);
    db.close();
    res.status(200).json(resposta); // Envie uma resposta de sucesso com os dados para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
