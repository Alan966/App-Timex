const express = require('express')
const router = express.Router()
const {list, create, remove, submenuoneById} = require('../controllers/SubMenu_one_Controlles')

router.get('/all', list)

router.post('/create', create)

router.delete('/:submenuoneById', remove)

router.param('submenuoneById', submenuoneById)

module.exports = router