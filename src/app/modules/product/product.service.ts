import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (data: TProduct) => {
  const result = await Product.create(data);
  return result;
};
const getAllProductIntoDB = async () => {
  const result = await Product.find({ isDeleted: { $ne: true } });
  return result;
};

const getSingleProductIntoDB = async (_id: string) => {
  const result = await Product.findById({ _id });
  // if (result?.isDeleted) {
  //   throw new AppError(httpStatus.BAD_REQUEST, 'Product is deleted');
  // }
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const updateProductStockIntoDB = async (id: string, quantity: number) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }

  product.stockQuantity = product.stockQuantity - quantity;
  await product.save();
};
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ProductServices = {
  getSingleProductIntoDB,
  getAllProductIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
  updateProductStockIntoDB,
  createProduct,
};
