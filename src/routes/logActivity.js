const express = require('express');
const router = express.Router();

const userController = require('../controller/logActivity');

// get all log
router.get('/', userController.getAllLog);

// get by date
router.get('/log', userController.getLogByDate);

// create newLog
router.post('/', userController.createNewLog);

module.exports = router;