export interface TVariant {
  id: string;
  name: string;
  price: number;
}

export interface TProduct {
  name: string;
  slug: string;
  image: string;
  description: string;
  variants: TVariant[];
  price: number;
  stockStatus: boolean;
  stockQuantity: number;
  rating: number;
  totalReview: number;
  brand: string;
  category: string;
  status: string;
  isDeleted: boolean;
}
