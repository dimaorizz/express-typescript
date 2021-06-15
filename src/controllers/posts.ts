import express from 'express';
import Post, {IPost} from '../models/Post';

export const getAllPosts = async (req: express.Request, res: express.Response): Promise<any> => {
  try {
    const posts: Array<IPost> = await Post.find();
    return res.status(200).json(posts);
  } catch(err: any) {
    console.log(`Error while getting all users: ${err}`);
    return res.sendStatus(500);
  }
};

export const createPost = async (req: express.Request, res: express.Response): Promise<any> => {
  try {
    const newPost: IPost = new Post(req.body);
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (err) {
    console.log(`Error while creating user: \nreq.body: ${JSON.stringify(req.body)} \nERR: ${err}`);
    return res.sendStatus(500);
  }
};

export const updatePost = async (req: express.Request, res: express.Response): Promise<any> => {
  const postID: string = req.params.id;
  try {
    await Post.updateOne({ _id: postID }, req.body);
    return res.sendStatus(200);
  } catch (err) {
    console.log(`Error while updating user: \nid: ${postID}, \nreq.body: ${JSON.stringify(req.body)} \nERR: ${err}`);
    return res.sendStatus(500);
  }
};

export const deletePost = async (req: express.Request, res: express.Response): Promise<any> => {
  const postID: string = req.params.id;
  try {
    const deletedPost = await Post.findByIdAndDelete(postID);
    return res.status(200).json(deletedPost);
  } catch (err) {
    console.log(`Error while deleting user: \nid: ${postID},\nERR: ${err}`);
    return res.sendStatus(500);
  }
};