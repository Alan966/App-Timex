const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SubMenu_one_Schema = new Schema(
  {
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    }
    }, 
    {timestamps: true}
); 

module.exports = mongoose.model("SubMenuone", SubMenu_one_Schema);