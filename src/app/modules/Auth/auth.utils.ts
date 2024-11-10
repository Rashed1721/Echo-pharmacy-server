import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
export const createToken = (
  jwtPayload: { userEmail: string; role: string; name: string; photo: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 12);
};
