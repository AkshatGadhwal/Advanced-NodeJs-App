
import * as userService from '../services/userService.js';
import validator from 'validator';

const emailValidator = (email) => {
    if ( validator.isEmpty(email) ) { return false; }
    return validator.isEmail(email);
};

const nameValidator = (name) => {
    if ( validator.isEmpty(name) ) { return false; }
    return validator.isAlpha(name);
};

const getAllUsers = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const users = userService.getUsers(page);
  res.json(users);
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = userService.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const createUser = (req, res) => {
  const userData = req.body;
  const {email, name} = userData;
  
  if( !emailValidator(email) ) { res.status(400).json( { error: 'Please enter a valid email'} ); }
  else if( !nameValidator(name) ) { res.status(400).json( { error: 'Name should only contain Alphabets'} );  }
  else if( userService.getUserByEmail(email) ) { res.status(409).json( { error: 'Email already exist'} )}
  else {
      const newUser = userService.createUser(userData);
      res.status(201).json(newUser);
  }
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const updatedUser = userService.updateUser(userId, userData);

  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  const deletedUser = userService.deleteUser(userId);

  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
