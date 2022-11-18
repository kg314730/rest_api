const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const MensRanking = require('./models/cricinfo');
app.get('/',async (req,res)=>{
    res.send("Hello guys!")
})

//Required for parsing json in request body
//Middleware
app.use(express.json());
//Post
app.post('/menscricket',async (req,res)=>{
    try{
        const addinfo = new MensRanking(req.body);
        const insertData = await addinfo.save();
        res.status(201).send(insertData);
    }
    catch(e){
        res.status(400).send(e);
    }
});

//Get Request
app.get('/menscricket',async (req,res)=>{
    try{
        const getRecord = await MensRanking.find({},{_id:0,__v:0});
        // console.log(getRecord);
        res.status(201).send(getRecord);
    }
    catch(e){
        res.status(400).send(e);
    }
});

//Get with id

app.get('/menscricket/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        // console.log(id);
        const getRecord = await MensRanking.find({ranking:id},{_id:0,__v:0});
        // console.log(getRecord);
        res.status(201).send(getRecord);
    }
    catch(e){
        res.status(400).send(e);
    }
});

//update

app.get('/menscricket/updateruns/:id/:run',async (req,res)=>{
    try{
        const id = req.params.id;
        const run = req.params.run;
        // console.log(id);
        const updateRecord = await MensRanking.updateOne({ranking:id},{
            $set:{
                runs: run,
            }
        });
        // console.log(getRecord);
        res.status(201).send(updateRecord);
    }
    catch(e){
        res.status(400).send(e);
    }
});

require('./db/conn');
app.listen(port, ()=>{
    console.log("listen on port",port);
});

var start = new Date().getTime();
for(let i=1;i<=100;i++){
    if(i%5==0 && i%3==0)
        console.log("hello_Students",i);
    else if(i%5==0)
        console.log("Students",i);
    else if(i%3==0)
        console.log("hello",i);
}
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);