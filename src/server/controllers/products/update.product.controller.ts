import { RequestHandler } from 'express';

const updateProduct:RequestHandler = async (req, res) => {
  const reqUrlSplit = req.url.split('/');
  const restaurantId = reqUrlSplit[2];
  const productId = reqUrlSplit[4];
  return res.send(`Update Product! product id: ${productId} from restaurant ID: ${restaurantId}!`);
};

export {updateProduct};