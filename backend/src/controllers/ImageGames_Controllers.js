const formidable = require('formidable'); 
const _ = require('lodash')
const fs = require('fs')

const ImageGame = require('../models/ImageGame'); 

const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    ImageGame.find()
    .select("-photo") 
    .populate('submenutwo')
    .sort([[sortBy, order]])
    .exec((err, imageGame) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(imageGame);
    })
}

const read = (req, res) => {
    req.imageGame.photo = undefined; 
    return res.json(req.imageGame);
}

const create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: 'problem with image'
            })
        }

        const {name, submenutwo } = fields; 
        let imageGame = new ImageGame(fields); 

        if(files.photo){
            if(files.photo.size > 1000000){
                return res.status(400).json({
                    error: "Image should be lass than 1MB in size"
                })
            }   

            imageGame.photo.data = fs.readFileSync(files.photo.filepath)
            console.log(imageGame.photo.data)
            imageGame.photo.contentType = files.photo.type 
        }

        imageGame.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: err
                })
            }
            res.json(result)
        })
    })
}

const remove = (req, res) => {
    let imageGame = req.imageGame; 
    imageGame.remove((err, deletedImageGame) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message: 'ImageGame deleted successfully'
        })
    })
}

const ImageMenuById = (req, res, next, id) => {
    ImageGame.findById(id)
    .populate('submenutwo')
    .exec((err, imageGame) => {
        if(err || !imageGame){
            return res.status(400).json({
                error: err
            });
        }
        req.imageGame = imageGame; 
        next();
    })
}

const photo = (req, res, next) => {
    if(req.imageGame.photo.data){
        res.set('Content-Type', req.imageGame.photo.contentType)
        return res.send(req.imageGame.photo.data)
    }
    next();
}

module.exports = {
    list, 
    read, 
    create, 
    remove, 
    ImageMenuById, 
    photo
}