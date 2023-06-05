import { validateHorario } from '../../services/validateHour.services';
import { validatePromoFields } from '../../services/validatePromoFields.service';
import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const { name, precopromo, promo, preco, description, diasempromo, horarioIniciopromo, horarioFimpromo, image, category, restaurantid } = req.body;

    const validadapromo = validatePromoFields(promo, description, precopromo, diasempromo, horarioIniciopromo, horarioFimpromo);

    const horarios = [ req.body.horarioIniciopromo, req.body.horarioFimpromo];

    for (const horario of horarios) {
      if (validateHorario(horario)) {
        console.log(`Horário inválido: ${horario}`);
        return res.status(400).json({ error: 'Formato dos campos inválido, intervalo minimo de 15 minutos' });
      }
    }

    if(validadapromo) {
      return res.status(400).json({ error: 'Campos inválidos ou faltantes' });
    }

    const db = await openDB();
    
    const existingRestaurant = await db.get('SELECT id FROM restaurant WHERE id = ?', [restaurantid]);
    if (!existingRestaurant) {
      return res.status(404).json({ error: 'Restaurante não encontrado' });
    }

    const resposta = await db.run('INSERT INTO products (name, precopromo, promo,  preco, description, diasempromo, horarioIniciopromo, horarioFimpromo, image, category, restaurant_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?)', [
      name,
      precopromo,
      promo,
      preco,
      description,
      diasempromo,
      horarioIniciopromo,
      horarioFimpromo,
      image,
      category,
      restaurantid
    ]);
    
    console.log(resposta);
    db.close();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
