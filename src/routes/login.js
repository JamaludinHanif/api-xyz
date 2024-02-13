const express = require('express');
const router = express.Router();

const userController = require('../controller/login')

// login
router.post('/', userController);

module.exports = router