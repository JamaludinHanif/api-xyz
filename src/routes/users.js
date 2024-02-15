const express = require('express');
const router = express.Router();

// CONTTROLLER
const userController = require('../controller/users')

// get all user
router.get('/', userController.getAllUsers); 

// get user by name
router.get('/user', userController.getUserByName);

// create newUser
router.post('/', userController.createNewUser);

// update user
router.patch('/', userController.updateUser);

// delete
router.delete('/', userController.deleteUser);

module.exports = router