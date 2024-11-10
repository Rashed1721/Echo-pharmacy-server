export interface TOrder {
  name: string;
  address: string;
  email: string;
  division: string;
  district: string;
  subDistrict: string;
  phone: string;
  total: number;
  transactionId:string
  orderId: string;
  orderDate: string;
  cartItems: {
    _id: string;
    image: string;
    name: string;
    price: number;
    stockQuantity: number;
    quantity: number;
  }[];
  status: 'shipping' | 'completed' | 'cancelled';
  paymentMethod: 'Cash On Delivery' | 'Credit Card' | 'PayPal';
}
