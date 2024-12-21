import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI1 = process.env.MONGO_URI;
URI1;
const URI =
  'mongodb+srv://devsalman010:d2HOWysVoYrfn2WR@resurrection.p7b8n.mongodb.net/paytm';

mongoose.connect(URI);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 3,
    maxLenght: 30,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
});

const accountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

export { User, Account };
