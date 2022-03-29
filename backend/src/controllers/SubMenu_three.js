const SubMenuthree = require('../models/SubMenu_three_model');

const create = (req, res) => {
    const submenuthree = new SubMenuthree(req.body); 
    submenuthree.save((err, data) => {
        if(err){
            return res.status(500).json({
                error: err
            })
        }
        res.json({data})
    })
}

const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    SubMenuthree.find()
    .populate('submenutwo')
    .sort([[sortBy, order]])
    .exec((err, data) => {
        if(err){
            return res.status(500).json({
                error: err
            })
        }
        res.json(data);
    })
}

module.exports = {
    create, 
    list
}