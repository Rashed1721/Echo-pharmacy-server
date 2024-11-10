import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  division: { type: String, required: true },
  district: { type: String, required: true },
  subDistrict: { type: String, required: true },
  transactionId: { type: String, required: true },
  phone: { type: String, required: true },
  total: { type: Number, required: true },
  orderId: { type: String, required: true },
  orderDate: { type: String, required: true },
  cartItems: [
    {
      _id: { type: String, required: true },
      image: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      stockQuantity: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ['shipping', 'completed', 'cancelled'],
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['Cash On Delivery', 'Credit Card', 'PayPal'],
    required: true,
  },
});

export const Order = model<TOrder>('Order', orderSchema);
