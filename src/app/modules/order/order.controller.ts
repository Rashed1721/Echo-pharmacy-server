import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.service';

const createOrder: RequestHandler = catchAsync(async (req, res) => {
  const orderData = req.body;

  await OrderServices.createOrder(orderData);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Order created successfully',
  });
});

const getAllOrders: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrders();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

const getUserOrders: RequestHandler = catchAsync(async (req, res) => {
  const email = req.params.email;
  const result = await OrderServices.getUserOrders(email);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User orders retrieved successfully',
    data: result,
  });
});
const updateOrderStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.updateOrderStatus(id, req.body.status);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Order status updated successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
};
