import { getAllPosts, createPost, updatePost, deletePost } from '../controllers/posts';
import { Router } from 'express';

const router = Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;