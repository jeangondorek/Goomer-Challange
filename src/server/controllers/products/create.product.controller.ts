import { RequestHandler } from 'express';

const createProduct:RequestHandler = async (req, res) => {
  const reqUrlSplit = req.url.split('/');
  const restaurantId = reqUrlSplit[2];
  return res.send(`Cria Product! from restaurant ID: ${restaurantId}!`);
};

export {createProduct};