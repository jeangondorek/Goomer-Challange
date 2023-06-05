import { RequestHandler } from 'express';
import { openDB } from '../index.controller';

export const updateRestaurant: RequestHandler = async (req, res) => {
  try {
    const db = await openDB();
    const { name, foto, address, dias, horarios } = req.body;
    const { id } = req.params;

    let query = 'UPDATE restaurant SET ';
    const values = [];
    let fieldsToUpdate = 0;

    if (name) {
      query += 'name = ?, ';
      values.push(name);
      fieldsToUpdate++;
    }

    if (foto) {
      query += 'foto = ?, ';
      values.push(foto);
      fieldsToUpdate++;
    }

    if (address) {
      query += 'address = ?, ';
      values.push(address);
      fieldsToUpdate++;
    }

    if (dias) {
      query += 'dias = ?, ';
      values.push(dias);
      fieldsToUpdate++;
    }

    if (horarios) {
      query += 'horarios = ?, ';
      values.push(horarios);
      fieldsToUpdate++;
    }

    if (fieldsToUpdate === 0) {
      res.sendStatus(400); // Nenhum campo fornecido para atualização
      return;
    }

    query = query.slice(0, -2); // Remover a vírgula extra no final
    query += ' WHERE id = ?';
    values.push(id);

    db.run(query, values);
    db.close();
    res.sendStatus(200); // Envie uma resposta de sucesso para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
