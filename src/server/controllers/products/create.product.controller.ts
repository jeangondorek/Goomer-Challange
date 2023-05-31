import { RequestHandler } from 'express';

const createProduct:RequestHandler = async (req, res) => {
  return res.send('Cria Product!');
};

export {createProduct};