import { RequestHandler } from 'express';

const createRestaurant:RequestHandler = async (req, res) => {
  return res.send('Cria restaurant!');
};

export {createRestaurant};