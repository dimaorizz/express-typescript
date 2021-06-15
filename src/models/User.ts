import { Schema, Document, Model, model } from 'mongoose';

// Interface to model User
export interface IUser extends Document {
  username: string,
  email: string,
  password: string,
  registeredAt?: Date
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

const User: Model<IUser> = model('User', UserSchema);

export default User;
