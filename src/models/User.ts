import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface User {
  username: string,
  email?: string,
  password: string,
  registeredAt?: Date
}

const UserSchema = new Schema<User>({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
});

const UserModel = mongoose.model<User>('User', UserSchema);

export { UserModel, User };