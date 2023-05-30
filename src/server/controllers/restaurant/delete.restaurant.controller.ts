import { RequestHandler } from 'express';

const deleteRestaurant:RequestHandler = async (req, res) => {
  return res.send('Delete restaurant!');
};

export {deleteRestaurant};