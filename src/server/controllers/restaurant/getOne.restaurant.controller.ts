import { RequestHandler } from 'express';

const getOneRestaurant:RequestHandler = async (req, res, next) => {
  if (req.url.includes('/products')) {
    return next();
  }
  return res.send('Get One Restaurant!');
};

export {getOneRestaurant};