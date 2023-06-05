import { validateHorario } from '../../services/validateHour.services';
import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const createRestaurant: RequestHandler = async (req, res) => {
  try {
    const db = await openDB();
    db.run('INSERT INTO restaurant (name, foto, address, dias, horarioInicio, horarioFim) VALUES (?, ?, ?, ?,?,?)', [
      req.body.name,
      req.body.foto,
      req.body.address,
      req.body.dias,
      req.body.horarioInicio,
      req.body.horarioFim
    ]);

    const horarios = [ req.body.horarioInicio, req.body.horarioFim];

    for (const horario of horarios) {
      if (validateHorario(horario)) {
        console.log(`Horário inválido: ${horario}`);
        return res.status(400).json({ error: 'Formato dos campos inválido, intervalo minimo de 15 minutos' });
      }
    }
    db.close();
    res.sendStatus(200); // Envie uma resposta de sucesso para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
