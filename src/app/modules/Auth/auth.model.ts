import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './auth.interface';

// User schema definition
const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [ 'admin', 'user'],
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// Check if user exists by ID
userSchema.statics.isUserExistsByCustomId = async function (email: string) {
  return this.findOne({ email }).select('+password');
};

// Check if password matches
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

// User model export
export const User = model<TUser, UserModel>('User', userSchema);
