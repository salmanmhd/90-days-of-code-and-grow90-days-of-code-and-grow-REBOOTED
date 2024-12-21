import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.SECRET;
export const authMiddleware = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    return res.status(403).json({
      msg: 'someting wrong with the authorization headers',
    });
  }

  const token = authHeaders.split(' ')[1];

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    if (verified.userId) {
      req.userId = verified.userId;
      next();
    } else {
      return res.status(403).json({
        msg: 'authorization failed',
      });
    }
  } catch (error) {
    return res.status(403).json({
      msg: 'authorization failed',
    });
  }
};
