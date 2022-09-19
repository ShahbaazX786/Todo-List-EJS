// jshint esversion 6

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000 || process.env.PORT; // 3000 port runs always on local host but process.env.port will get any free port on internet server and then will run on that port.

const app = express(); // creating a simple constant variable for the express server to run with more english meaning.

app.use(bodyParser.urlencoded({extended:true}));


app.set("view engine", "ejs"); // this command sets the default view engine to ejs so that it can fetch the list.ejs file from the views folder. list.ejs is just an ordinary filename you can use whatever name you want, most people use index.ejs.




let task_array=[];
let newTask="";




app.get("/", function(req,res){

    const today = new Date();
    const currentDay = today.getDay();
    // week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    const day=today.toLocaleDateString("en-US",options); //this is modern date string function which i just customized using options parameter.

    res.render("list", {dayofweek:day,taskArray:task_array});
});






app.post('/',function(req,res){
    newTask=req.body.task;
    task_array.push(newTask);
    res.redirect('/');
})








app.listen(PORT,function(){
    console.log("server started on port "+PORT+" bro!");
});