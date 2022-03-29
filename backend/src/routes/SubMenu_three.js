const express = require('express'); 
const router = express.Router(); 
const controlles = require('../controllers/SubMenu_three');

router.get('/all', controlles.list);

router.post('/create', controlles.create);

router.delete('/:SubmenuthreeById', (req, res) => {
    res.send({
        message: 'Los esta eliminando pa'
    })
})

router.param('SubmenuthreeById', (req, res) => {
    res.send({
        message: 'Los esta buscando pa'
    })
})

module.exports = router;