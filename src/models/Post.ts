import { Schema, Document, Model, model } from 'mongoose';
import { IUser } from './User';

export interface IPost extends Document{
  title: string,
  description?: string,
  text: string,
  author: IUser['_id'],
  createdAt?: Date
}

const PostSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  text: {
    type: String,
    ref: 'User',
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post: Model<IPost> = model('Post', PostSchema); 

export default Post;