import { UpdateUserRoleData } from '../../interface/error';
import { User } from '../Auth/auth.model';

const getAllUserIntoDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserIntoDB = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};
const updateUserRole = async (data: UpdateUserRoleData) => {
  const result = await User.findByIdAndUpdate(
    { _id: data.id },
    { role: data.role },
    { new: true },
  );
  return result;
};

export const UserServices = {
  getSingleUserIntoDB,
  getAllUserIntoDB,
  updateUserRole,
};
