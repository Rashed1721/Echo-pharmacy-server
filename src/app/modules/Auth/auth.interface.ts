/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './auth.constant';
export type TLoginUser = {
  email: string;
  password: string;
};

export interface TUser {
  name: string;
  photo: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isDeleted: boolean;
  isVerified?: boolean;
  otp?: string;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
