const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

/* GET or CREATE User*/
router.get('/', userController.getAll);
router.post('/', userController.findOrCreate);

module.exports = router;
