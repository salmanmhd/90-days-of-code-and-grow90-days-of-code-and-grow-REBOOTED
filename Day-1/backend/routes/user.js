import express from 'express';
import jwt from 'jsonwebtoken';
import zod, { string } from 'zod';
import { Account, User } from '../db.js';
import { authMiddleware } from '../middleware.js';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.SECRET;

const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post('/signin', async (req, res) => {
  const body = req.body;

  const success = signinSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({
      msg: 'bad inputs',
    });
  }

  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({
      token,
    });
    return;
  }

  res.status(400).json({
    msg: 'wrong username or password',
  });
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    res.status(400).json({
      msg: 'incorrect inputs',
    });
    return;
  }

  const user = await User.findOne({ username: body.username });
  if (user) {
    res.status(400).json({
      msg: 'user already exist, please sign in!',
    });
    return;
  }

  const dbUser = await User.create(body);
  const userId = dbUser._id;
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });
  const token = jwt.sign({ userId }, JWT_SECRET);
  res.status(200).json({
    msg: 'user created successfully',
    token,
  });
});

const updateSchema = zod.object({
  firstName: string().optional(),
  lastName: string().optional(),
  password: string().optional(),
});

router.put('/', authMiddleware, async (req, res) => {
  const success = updateSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: 'bad inputs while updating',
    });
  }
  await User.updateOne(req.body, {
    id: req.userId,
  });
  res.status(200).json({
    msg: 'user updated successfully',
  });
});

router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || '';
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
          $options: 'i',
        },
      },
      {
        lastName: {
          $regex: filter,
          $options: 'i',
        },
      },
    ],
  });

  res.status(200).json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._id,
    })),
  });
});

export { router };
