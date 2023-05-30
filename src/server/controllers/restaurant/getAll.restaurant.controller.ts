import { RequestHandler } from 'express';

const getAllRestaurant:RequestHandler = async (req, res) => {
  return res.send('Get All restaurant!');
};

export {getAllRestaurant};