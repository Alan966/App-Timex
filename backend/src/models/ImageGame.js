const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema 

const ImageGameSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            trim: true, 
            require: true, 
            maxlength: 200,
        },
        submenutwo:{
            type: ObjectId,
            ref: 'SubMenutwo',
            required: true,
        }, 
        photo:{
            data: Buffer, 
            contentType: String
        }
    }, 
    {timestamps: true}
); 

module.exports = mongoose.model("ImageGame", ImageGameSchema);