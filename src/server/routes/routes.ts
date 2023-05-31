import { Router } from 'express';
import { productController, restaurantController } from '../controllers/index.controller';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Hello World!');
});

router.post('/restaurant', restaurantController.createRestaurant);
router.delete('/restaurant/:id', restaurantController.deleteRestaurant);
router.put('/restaurant/:id', restaurantController.updateRestaurant);
router.get('/restaurant', restaurantController.getAllRestaurant);
router.get('/restaurant/:id', restaurantController.getOneRestaurant);

router.post('/restaurant/:id/products', restaurantController.getOneRestaurant ,productController.createProduct);
router.delete('/restaurant/:id/products/:id', restaurantController.getOneRestaurant, productController.deleteProduct);
router.put('/restaurant/:id/products/:id', restaurantController.getOneRestaurant, productController.updateProduct);
router.get('/restaurant/:id/products', restaurantController.getOneRestaurant, productController.getAllProduct);
router.get('/restaurant/:id/products/:id', restaurantController.getOneRestaurant, productController.getOneProduct);

export {router};