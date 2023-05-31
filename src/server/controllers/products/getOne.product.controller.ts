import { RequestHandler } from 'express';

const getOneProduct:RequestHandler = async (req, res) => {
  return res.send('Get One restaurant!');
};

export {getOneProduct};