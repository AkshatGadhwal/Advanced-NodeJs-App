import users from '../models/users.json' assert { type: 'json' };

const PAGE_SIZE = 10;
let lastUserId = 50;


const generateUserId = () => {
    lastUserId++;
    return lastUserId.toString();
};

const getUserByEmail = (email) => {
    return users.find((user) => user["email"] == email);
};

const getUserByName = (name) => {
    return users.find((user) => user["name"] == name);
};

const getUsers = (page = 1) => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = page * PAGE_SIZE;
  const paginatedUsers = users.slice(startIndex, endIndex);

  return {
    data: paginatedUsers,
    page,
    totalPages: Math.ceil(users.length / PAGE_SIZE),
  };
};

const getUserById = (userId) => {
    console.log(userId)
    return users.find((user) => user["id"] == userId);
};

const createUser = (userData) => {
  const { name, email } = userData;
  const newUser = {
    id: generateUserId(), // Generate a unique user ID
    name,
    email,
  };
  users.push(newUser);
  return newUser;
};

const updateUser = (userId, userData) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex != -1) {
    users[userIndex].name = userData.name || users[userIndex].name;
    users[userIndex].email = userData.email || users[userIndex].email;
    return users[userIndex];
  } else {
    return null;
  }
};

const deleteUser = (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  } else {
    return null;
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser, getUserByEmail, getUserByName };
