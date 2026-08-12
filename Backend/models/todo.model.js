const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },

    //how we will get to know which user has created the todo list ?
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
})

module.exports = mongoose.model("Todo", todoSchema);