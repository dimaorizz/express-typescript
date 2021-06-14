import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface Post {
  title: string,
  description?: string,
  text: string,
  author: mongoose.Types.ObjectId,
  createdAt?: Date
}

const PostSchema = new Schema<Post>({
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

const PostModel = mongoose.model('Post', PostSchema); 

export {
  PostModel,
  Post
};