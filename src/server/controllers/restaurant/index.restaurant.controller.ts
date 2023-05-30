import { createRestaurant} from './create.restaurant.controller';
import { deleteRestaurant } from './delete.restaurant.controller';
import { getAllRestaurant } from './getAll.restaurant.controller';
import { getOneRestaurant } from './getOne.restaurant.controller';
import { updateRestaurant } from './update.restaurant.controller';

export const restaurantController = {
  createRestaurant,
  updateRestaurant,
  getOneRestaurant,
  getAllRestaurant,
  deleteRestaurant,
};
