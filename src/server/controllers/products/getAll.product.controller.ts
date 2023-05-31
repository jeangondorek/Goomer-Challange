import { RequestHandler } from 'express';

const getAllProduct:RequestHandler = async (req, res) => {
  return res.send('Get All Product!');
};

export {getAllProduct};