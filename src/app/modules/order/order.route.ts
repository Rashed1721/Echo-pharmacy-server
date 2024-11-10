import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders);
router.get('/:email', OrderControllers.getUserOrders);
router.put('/:id', OrderControllers.updateOrderStatus);

export const OrderRoutes = router;
