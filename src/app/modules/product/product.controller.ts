import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProductServices.createProduct(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product Created successfully',
    data: result,
  });
});
const getSingleProduct: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await ProductServices.getSingleProductIntoDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
});
const getAllProducts: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductIntoDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});
const updateProductStockFromOrder: RequestHandler = catchAsync(
  async (req, res) => {
    const { items } = req.body;

    const updatePromises = items.map(
      async (item: { productId: string; quantity: number }) => {
        const { productId, quantity } = item;
        await ProductServices.updateProductStockIntoDB(productId, quantity);
      },
    );

    await Promise.all(updatePromises);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Product stocks updated successfully',
    });
  },
);
const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await ProductServices.updateProductIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const ProductControllers = {
  getSingleProduct,
  updateProductStockFromOrder,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProduct,
};
