import express from 'express';
import {createValidator, updateValidator} from '../middlewares/validator.js';
const router = express.Router();
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

router.get('/', getAllUsers);
router.post('/', createValidator, createUser);
router.get('/:id', getUserById);
router.put('/:id', updateValidator, updateUser);
router.delete('/:id', deleteUser);

export default router;
