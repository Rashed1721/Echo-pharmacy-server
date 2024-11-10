import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const newOrder = await Order.create(orderData);
  const cartItems = orderData.cartItems;
  for (const item of cartItems) {
    await Product.findByIdAndUpdate(
      { _id: item._id },
      { $inc: { stockQuantity: -item.quantity } },
      { new: true },
    );
  }

  return newOrder;
};
const getAllOrders = async (): Promise<TOrder[]> => {
  return await Order.find();
};
const updateOrderStatus = async (id: string, status: string) => {
  return await Order.findByIdAndUpdate(
    { _id: id },
    { status: status },
    { new: true },
  );
};

const getUserOrders = async (email: string): Promise<TOrder[]> => {
  return await Order.find({ email });
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
};
