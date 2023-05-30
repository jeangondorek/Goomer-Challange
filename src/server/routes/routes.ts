import { Router } from 'express';
import { restaurantController } from '../controllers/index.controller';

const router = Router();

router.post('/restaurant', restaurantController.createRestaurant);
router.delete('/restaurant/:id', restaurantController.deleteRestaurant);
router.put('/restaurant/:id', restaurantController.updateRestaurant);
router.get('/restaurant', restaurantController.getAllRestaurant);
router.get('/restaurant/:id', restaurantController.getOneRestaurant);

export {router};