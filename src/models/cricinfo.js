const mongoose = require('mongoose');
const cricketSchema1 = new mongoose.Schema({
    ranking:{
        type: Number,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required:true,
        trim: true,
    },
    runs:{
        type: Number,
        required:true,
        trim: true,
    },
    balls:{
        type: Number,
        required:true,
        trim: true,
    },
    fours:{
        type: Number,
        required:true,
        trim: true,
    },
    sixes:{
        type: Number,
        required:true,
        trim: true,
    },
    sr:{
        type: Number,
        required:true,
        trim: true,
    },

})

const model = new mongoose.model('cricPlayer',cricketSchema1);
module.exports = model;