const mongoose= require('mongoose');
const groupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    id:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
    },
    updatedAt:{
        type:Date,
        required:true,
    }
})
const Group=mongoose.model('Group',groupSchema);
module.export=Group;