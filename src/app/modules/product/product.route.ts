import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.delete('/:id', ProductControllers.deleteProduct);
router.post('', ProductControllers.createProduct);
router.get('', ProductControllers.getAllProducts);
router.get('/:id', ProductControllers.getSingleProduct);
router.put('/:id', ProductControllers.updateProduct);
router.post('/update-stock', ProductControllers.updateProductStockFromOrder);
export const ProductRoutes = router;
