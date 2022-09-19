// jshint esversion 6

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000 || process.env.PORT; // 3000 port runs always on local host but process.env.port will get any free port on internet server and then will run on that port.

const app = express(); // creating a simple constant variable for the express server to run with more english meaning.

app.set("view engine", "ejs"); // this command sets the default view engine to ejs so that it can fetch the list.ejs file from the views folder. list.ejs is just an ordinary filename you can use whatever name you want, most people use index.ejs.


app.get("/", function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    res.render("list", {dayofweek:week[currentDay]});
});


app.listen(PORT,function(){
    console.log("server started on port "+PORT+" bro!");
});