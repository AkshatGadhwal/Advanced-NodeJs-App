// this logic handle updating the database. However, it is not implementated for sake of simplicity


import { readFile, writeFile } from 'fs/promises';

const filePath = '../models/users.json';

async function getUsersData() {
    try {
      const jsonData = await readFile(filePath, 'utf8');
      return JSON.parse(jsonData);
    } catch (error) {
      return [];
    }
};

const createUser = async (user) => {
    try {
      const usersData = await getUsersData();
      usersData.push(user);
      await writeFile(filePath, JSON.stringify(usersData, null, 2));
    } catch (error) {
      console.error('Error creating user:', error);
    }
}

const updateUser = async (userId, updatedUser) => {
    try {
      const usersData = await getUsersData();
      const userIndex = usersData.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        usersData[userIndex].name = updateUser.name || usersData[userIndex].name;
        usersData[userIndex].email = updateUser.email || usersData[userIndex].email;
        await writeFile(filePath, JSON.stringify(usersData, null, 2)); 
      }
    } catch (error) {
      // Handle any errors that occur during file writing
      console.error('Error updating user:', error);
    }
}

async function deleteUser(userId) {
    try {
        let users = await getUsersData();

        const userIndex = users.findIndex((user) => user.id === userId);

        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            await writeFile(filePath, JSON.stringify(users, null, 2));
        } 
    } catch (error) {
        // Handle any errors that occur during file writing
        console.error('Error deleting user:', error);
    }
}
  
  
  
  
