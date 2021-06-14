import express from 'express';
import { UserModel, User } from '../models/User';
import mongoose from 'mongoose';
import { Router } from 'express';

const router = Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  const users: Array<mongoose.Document> = await UserModel.find();
  console.log(users);
  res.send(users);
});

router.post('/', async (req: express.Request, res: express.Response) => {
  const inputUser: User = req.body;
  const newUser: mongoose.Document = new UserModel(inputUser);
  await newUser.save();
  res.sendStatus(200);
});

router.patch('/:id', async(req: express.Request, res: express.Response) => {
  const userID: string = req.params.id;
  const updateParams = req.body;
  const userToUpdate: mongoose.Document = await UserModel.findByIdAndUpdate(userID, updateParams);
  res.send(userToUpdate);
});

router.delete('/:id', async(req: express.Request, res: express.Response) => {
  const userID: string = req.params.id;
  const userToDelete: mongoose.Document = await UserModel.findByIdAndDelete(userID);
  res.send(userToDelete);
});

export default router;