import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const getSingleUser: RequestHandler = catchAsync(async (req, res) => {
  const email = req.params.email;
  const result = await UserServices.getSingleUserIntoDB(email);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});
const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserIntoDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const updateUserRole: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.updateUserRole(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Role Updated successfully',
    data: result,
  });
});
export const UserControllers = {
  getSingleUser,
  getAllUsers,
  updateUserRole,
};
