import express from 'express';
import User, {IUser} from '../models/User';
import Queue from '../queue';

export const getAllUsers = async (req: express.Request, res: express.Response): Promise<any> => {
  try {
    const users: Array<IUser> = await User.find();
    return res.status(200).json(users);
  } catch(err: any) {
    console.log(`Error while getting all users: ${err}`);
    return res.sendStatus(500);
  }
};

export const createUser = async (req: express.Request, res: express.Response): Promise<any> => {
  try {
    const newUser: IUser = new User(req.body);
    // const userExists = await User.findOne({ email: req.body.email });
    Queue.add('create-user', newUser, { delay: 60000 });
    // if(userExists) {
    //   return res.status(400).json({err: 'User already exists'});
    // }
    // await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(`Error while creating user: \nreq.body: ${JSON.stringify(req.body)} \nERR: ${err}`);
    return res.sendStatus(500);
  }
};

export const updateUser = async (req: express.Request, res: express.Response): Promise<any> => {
  const userID: string = req.params.id;
  try {
    await User.updateOne({ _id: userID }, req.body);
    return res.sendStatus(200);
  } catch (err) {
    console.log(`Error while updating user: \nid: ${userID}, \nreq.body: ${JSON.stringify(req.body)} \nERR: ${err}`);
    return res.sendStatus(500);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response): Promise<any> => {
  const userID: string = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userID);
    return res.status(200).json(deletedUser);
  } catch (err) {
    console.log(`Error while deleting user: \nid: ${userID},\nERR: ${err}`);
    return res.sendStatus(500);
  }
};