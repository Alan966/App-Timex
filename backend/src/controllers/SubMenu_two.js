const SubMenutwo = require('../models/SubMenu_two_model')

const create = (req, res) => {
    const submenutwo = new SubMenutwo(req.body)
    submenutwo.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        } 
        res.json({data})
    })
}

const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'; 

    SubMenutwo.find()
        .populate('submenuone')
        .sort([[sortBy, order]])
        .exec((err, data) => {
            if(err){
                return res.status(400).json({
                    error: err
                })
            }
            res.json(data);
        })
}

const remove = (req, res) => {
    let submenutwo = req.submenutwo;
    submenutwo.remove((err, deletedSubmenuTwo) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message: "Submenu two deleted successfully"
        })
    })
}

const SubMenutwoById = (req, res, next, id) => {
    SubMenutwo.findById(id)
        .exec((err,submenutwo) => {
            if(err || !submenutwo){
                return res.status(400).json({
                    error: "Submenu one not found"
                })
            }
            req.submenutwo = submenutwo; 
            next();
        })

}

module.exports = {
    list, 
    create, 
    remove, 
    SubMenutwoById
}