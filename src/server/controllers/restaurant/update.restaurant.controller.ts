import { RequestHandler } from 'express';
import { openDB } from '../index.controller';
import { validateHorario } from '../../services/validateHour.services';

export const updateRestaurant: RequestHandler = async (req, res) => {
  try {
    const db = await openDB();
    const { name, foto, address, dias, horarioInicio, horarioFim } = req.body;
    const { id } = req.params;

    const horarios = [ req.body.horarioInicio, req.body.horarioFim];

    for (const horario of horarios) {
      if (validateHorario(horario)) {
        console.log(`Horário inválido: ${horario}`);
        return res.status(400).json({ error: 'Formato dos campos inválido, intervalo minimo de 15 minutos' });
      }
    }

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

    if (horarioInicio) {
      query += 'horarioInicio = ?, ';
      values.push(horarioInicio);
      fieldsToUpdate++;
    }

    if (horarioFim) {
      query += 'horarioFim = ?, ';
      values.push(horarioFim);
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
