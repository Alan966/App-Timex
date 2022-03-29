const express = require('express')
const router = express.Router() 
const {list, read, create, remove, ImageMenuById, photo } = require('../controllers/ImageGames_Controllers')

router.get('/imageAll', list)

router.post('/create', create)

router.get('/photo/:ImageMenuById', photo)

router.get('/:ImageMenuById', read)

router.delete('/:ImageMenuById',remove)

router.param("ImageMenuById", ImageMenuById)

module.exports = router;