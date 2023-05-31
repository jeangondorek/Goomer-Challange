import { RequestHandler } from 'express';

const getAllProduct:RequestHandler = async (req, res) => {
  const reqUrlSplit = req.url.split('/');
  const restaurantId = reqUrlSplit[2];
  return res.send(`Get All Product! from restaurant ID: ${restaurantId}!`);
};

export {getAllProduct};