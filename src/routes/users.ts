import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/users';
import { Router } from 'express';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;