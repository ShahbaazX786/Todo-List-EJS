const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // creating a simple constant variable for the express server to run with more english meaning.

app.use('view engine', 'ejs');

const PORT = 3000 || process.env.PORT; // 3000 port runs always on local host but process.env.port will get any free port on internet server and then will run on that port.

app.get("/",function(req,res){
    res.send("<h1>Hello bro</h1>");
})


app.listen(PORT,function(){
    console.log("server started on port "+PORT+" bro!");
});