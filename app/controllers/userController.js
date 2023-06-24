import * as userService from '../services/userService.js';

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
  const {email} = userData;
  
  if( userService.getUserByEmail(email) ) { res.status(409).json( { error: 'Email already exist'} ); }
  else {
      const newUser = userService.createUser(userData);
      res.status(201).json(newUser);
  }
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const {email} = userData;

    const user = userService.getUserByEmail(email);
    if( user && user.id != userId ) { 
        res.status(409).json( { error: 'Email already exist'} );
        return; 
    }

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
