let nextUserId = 1;
import users from '../models/users.js';

export const getUserList = (page, limit) => {
};

export const createUser = (userData) => {
};

export const getUserById = (userId) => {
  return users.find((user) => user.id === Number(userId));
};

// Update a user
export const updateUser = (userId, updatedUserData) => {
};

// Delete a user
export const deleteUser = (userId) => {
};
