const mongoose= require('mongoose')
const { ObjectId } = mongoose.Schema 

const SubMenu_two_Schema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength:200,
    }, 
    submenuone:{
        type: ObjectId,
        ref: 'SubMenuone',
        required: true,
    }
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('SubMenutwo', SubMenu_two_Schema);