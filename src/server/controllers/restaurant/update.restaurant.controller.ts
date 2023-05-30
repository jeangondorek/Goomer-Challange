import { RequestHandler } from 'express';

const updateRestaurant:RequestHandler = async (req, res) => {
  return res.send('Update restaurant!');
};

export {updateRestaurant};