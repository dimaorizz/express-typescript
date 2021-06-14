import express from 'express';
import { Post, PostModel } from '../models/Post';
import mongoose from 'mongoose';
import { Router } from 'express';

const router = Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
});

router.post('/', async (req: express.Request, res: express.Response) => {
  const inputPost: Post = req.body;
  const newPost: mongoose.Document = new PostModel(inputPost);
  await newPost.save();
  res.sendStatus(200);
});

export default router;