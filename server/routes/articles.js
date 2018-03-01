const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles')
const authanddecode = require('../helper/authanddecode')

/* GET or CREATE articles*/
router.get('/', articlesController.getAll);
router.post('/', authanddecode, articlesController.create)
module.exports = router;
