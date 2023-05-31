import { RequestHandler } from 'express';

const updateProduct:RequestHandler = async (req, res) => {
  return res.send('Update Product!');
};

export {updateProduct};