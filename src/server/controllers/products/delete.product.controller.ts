import { RequestHandler } from 'express';

const deleteProduct:RequestHandler = async (req, res) => {
  const reqUrlSplit = req.url.split('/');
  const restaurantId = reqUrlSplit[2];
  const productId = reqUrlSplit[4];
  return res.send(`Delete Product! id do produto ${productId} from restaurant ID: ${restaurantId}!`);
};

export {deleteProduct};