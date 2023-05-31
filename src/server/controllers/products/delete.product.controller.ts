import { RequestHandler } from 'express';

const deleteProduct:RequestHandler = async (req, res) => {
  return res.send('Delete Product!');
};

export {deleteProduct};