import express from 'express';
const router = express.Router();
import {
  getUserList,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';

router.get('/', getUserList);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
