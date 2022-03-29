const express = require('express')
const router = express.Router()
const {list, create, remove, SubMenutwoById} = require('../controllers/SubMenu_two')

router.get('/all', list )
router.post('/create', create)
router.delete('/:SubMenutwoById', remove)
router.param('SubMenutwoById', SubMenutwoById)

module.exports = router;