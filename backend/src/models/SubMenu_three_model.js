const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const { ObjectId } = Schema

const SubMenu_three_Schema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        }, 
        submenutwo:{
            type: ObjectId,
            ref: 'SubMenutwo',
            required: true,
        }
    }, 
    {timestamps: true}
); 

module.exports = mongoose.model("SubMenuthree", SubMenu_three_Schema);