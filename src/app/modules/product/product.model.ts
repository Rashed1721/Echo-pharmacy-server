import { Schema, model } from 'mongoose';
import { TProduct, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    variants: [variantSchema], // Embed the variants schema
    price: { type: Number, required: true },
    stockStatus: { type: Boolean, required: true },
    stockQuantity: { type: Number, required: true },
    rating: { type: Number, required: true },
    totalReview: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model<TProduct>('Product', productSchema);
