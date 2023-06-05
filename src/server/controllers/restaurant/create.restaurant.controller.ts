import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const createRestaurant: RequestHandler = async (req, res) => {
  try {
    const db = await openDB();
    db.run('INSERT INTO restaurant (name, foto, address, dias, horarios) VALUES (?, ?, ?, ?, ?)', [
      req.body.name,
      req.body.foto,
      req.body.address,
      req.body.dias,
      req.body.horarios
    ]);
    db.close();
    res.sendStatus(200); // Envie uma resposta de sucesso para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
