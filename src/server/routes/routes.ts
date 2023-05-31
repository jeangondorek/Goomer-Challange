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

router.post('/restaurant/:id/products', productController.createProduct);
router.delete('/products/:id', productController.deleteProduct);
router.put('/products/:id', productController.updateProduct);
router.get('/products', productController.getAllProduct);
router.get('/products/:id', productController.getOneProduct);

export {router};