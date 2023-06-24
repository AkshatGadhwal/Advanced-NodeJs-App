import { getUserList, createUser, getUserById, updateUser, deleteUser } from '../services/userService';

export const getUserList = (req, res) => {
  const { page, limit } = req.query;
  const userList = getUserList(page, limit);
  res.json(userList);
};

export const createUser = (req, res) => {
};

export const getUserById = (req, res) => {
};

export const updateUser = (req, res) => {
};

export const deleteUser = (req, res) => {
};
