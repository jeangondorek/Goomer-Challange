import { RequestHandler } from 'express';

const getOneRestaurant:RequestHandler = async (req, res) => {
  return res.send('Get One restaurant!');
};

export {getOneRestaurant};