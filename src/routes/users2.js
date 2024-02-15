const express = require('express');

const router = express.Router();

// controller
const userController = require('../controller/users2')

// get all users
router.get('/', userController.getAllUsers)

// get user by id
router.get('/te', userController.getUser)

// post data user
router.post('/', userController.createNewUsers)

// update data
router.patch('/', userController.updateUser)

// delete data user
router.delete('/', userController.deleteUser)

module.exports = router;