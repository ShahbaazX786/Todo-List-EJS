// jshint esversion 6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname+'/date.js');
const PORT = process.env.PORT || 3000; // 3000 port runs always on local host but process.env.port will get any free port on internet server and then will run on that port.

const app = express(); // creating a simple constant variable for the express server to run with more english meaning.

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //this is used to serve static files like styles, images, other assets which are kept in a folder  called as public. 

app.set("view engine", "ejs"); // this command sets the default view engine to ejs so that it can fetch the list.ejs file from the views folder. list.ejs is just an ordinary filename you can use whatever name you want, most people use index.ejs.

const URL='mongodb://0.0.0.0:27017/todolistDB';
mongoose.connect(URL,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to the DB Successfully!');
    }
});

let task_array=[];
let work_array=[];
let newTask="";
const day=date.getDay();




app.get("/", function(req,res){
    res.render("list", {taskArray:task_array,list_title:"home",dayofweek:day});
});




app.post('/',function(req,res){
    newTask=req.body.task;
    title=req.body.list;
    if(title === "home"){
        task_array.push(newTask);
        res.redirect('/');
    }
    else if (title === "work"){
        work_array.push(newTask);
        res.redirect('/work');
    }
});



app.get('/work',function(req,res){
    res.render("list",{list_title:"work",taskArray:work_array,dayofweek:day});
});



app.post('/work',function(req,res){
    let work_item = req.body.newTask;
    work_array.push(work_item);
    res.redirect('/work');
});



app.get('/about',function(req,res){
    res.render('about');
})


app.listen(PORT,function(){
    console.log("server started on port "+PORT+" bro!");
});