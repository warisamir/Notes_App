const { Schema } = require("mongoose");

const notesSchema=new Mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:
    {
        type:String,
        required:true,
    },
    group:{
        type:Schema.mongoose.Types.ObjectId, 
        ref: 'Group',
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
    }
})
const Note=new mongoosemodel('Note',notesSchema);
module.exports=Note;