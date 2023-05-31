import { RequestHandler } from 'express';

const getOneProduct:RequestHandler = async (req, res) => {
  const reqUrlSplit = req.url.split('/');
  const restaurantId = reqUrlSplit[2];
  const productId = reqUrlSplit[4];
  return res.send(`Get One product ID: ${productId} from restaurant ID: ${restaurantId}!`);
};

export {getOneProduct};