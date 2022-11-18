const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cricketinfo",{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>{
    console.log("Connection established")
})
.catch((err)=>{
    console.log(err);
})