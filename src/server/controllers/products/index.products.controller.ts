import { createProduct } from './create.product.controller';
import { deleteProduct } from './delete.product.controller';
import { getAllProduct } from './getAll.product.controller';
import { getOneProduct } from './getOne.product.controller';
import { updateProduct } from './update.product.controller';

export const productController = {
  createProduct,
  updateProduct,
  getOneProduct,
  getAllProduct,
  deleteProduct,
};
