import { Router } from 'express';

import ProductController from './Product.controller';
import ProductService from '../../application';

const router = Router();

const productController = ProductController(ProductService);

router.get('/', productController.getAllProducts);

export default router;