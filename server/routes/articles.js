const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles')
const authanddecode = require('../helper/authanddecode')

/* GET or CREATE articles*/
router.get('/', articlesController.getAll);
router.post('/', authanddecode, articlesController.create)
router.put('/:id', authanddecode, articlesController.update)
router.delete('/:id', authanddecode, articlesController.delete)
router.get('/author/:search', articlesController.getByAuthor)
router.get('/category/:search', articlesController.getByCategory)


module.exports = router;