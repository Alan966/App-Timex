const SubMenuone = require('../models/SubMenu_one_model'); 

const list = (req, res) => {
    SubMenuone.find().exec((err, data) => {
        if(err){
            return res.status(500).json({
                error: err
            });
        }
        res.json(data);
    })
}

const create = (req, res) => {
    console.log(req.body)
    const submenuone = new SubMenuone(req.body);
    submenuone.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json({data})
    })
}

const remove = (req, res) => {
    let submenu = req.submenuone;
    submenu.remove((err, data) => {
        if(err){
            return res.status(500).json({
                error: err
            })
        }
        res.json({data})
    })
}

const submenuoneById = (req, res, next, id) => {
    SubMenuone.findById(id).exec((err, submenuone) => {
        if(err || !submenuone){
            return res.status(400).json({
                error: "SubMenu_one not found"
            })
        }
        req.submenuone = submenuone;
        next();
    })
}

module.exports = {
    list, 
    create, 
    remove, 
    submenuoneById
}