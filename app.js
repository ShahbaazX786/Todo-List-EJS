// jshint esversion 6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const date = require(__dirname+'/date.js');
const PORT = process.env.PORT || 3000; // 3000 port runs always on local host but process.env.port will get any free port on internet server and then will run on that port.

const app = express(); // creating a simple constant variable for the express server to run with more english meaning.

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //this is used to serve static files like styles, images, other assets which are kept in a folder  called as public. 

app.set("view engine", "ejs"); // this command sets the default view engine to ejs so that it can fetch the list.ejs file from the views folder. list.ejs is just an ordinary filename you can use whatever name you want, most people use index.ejs.

const day=date.getDay();


const URL='mongodb://0.0.0.0:27017/todolistDB';
mongoose.connect(URL,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to the DB Successfully!');
    }
});

// creating schema for items(blueprint)
const itemsSchema = new mongoose.Schema({
    name:String,
});

// creating model using the itemsSchema and the items collection. 
// ps: always remember the first parameter in the model generation is singular name of the collection
//  ex: if the name of the collection is people then the first parameter should be Person(Singular Noun).
const Item = new mongoose.model("Item",itemsSchema);

// creating temporary documents(records) and adding them into the default_Array.
const item1 = new Item({
    name:"Sternritters of Bleach"
});
const item2 = new Item({
    name:"Bankai of Bleach"
});
const item3 = new Item({
    name:"Shikai of Bleach"
});

const default_Array = [item1,item2,item3];




//when a get request is sent on this route then it first fetches all the documents available in the Items collection of tolistDB in mongodb
// and if the result is an empty array then it will use insertMany function to insert the default_Array in the Items Collection 
// and then redirects to the home route so that the home list refreshes with new document data from the mongodb.
app.get("/", function(req,res){
    
    Item.find({} ,function(err,foundItems){
        if(foundItems.length === 0){
            Item.insertMany(default_Array,function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Default array was empty so default Data successfully entered into the DB!');
                }
            });
            res.redirect('/'); // redirects to home route after adding the default items to the mongodb to display items in the list.ejs
        }
        else{
            res.render("list", {taskArray:foundItems,list_title:"Today",dayofweek:day});
        }
    });
});



// temporary schema for dynamic routing and dynamic lists
const listSchema = new mongoose.Schema({
    name:String,
    items:[itemsSchema]
});

const List = new mongoose.model("List",listSchema);


// this is called as a dynamic route as the :id value can be anything.
// this will find if there is any list with same name already present in the db, if so, then it will use the same document
// else it will create a new one and redirects to dynamic route after saving the new dynamic route list name into the db.
app.get('/:id',function(req,res){
    const customlistname = _.capitalize(req.params.id);

    
    List.findOne({name:customlistname},function(err,resultantlist){
        if(!err){
            if(!resultantlist){
                // console.log('This name doesnt exist bro!');
                const list = new List({
                    name:customlistname,
                    items: default_Array
                });
                list.save();
                res.redirect('/'+customlistname);
            }
            else{
                // console.log('this name already exists bro!');
                res.render("list",{list_title:resultantlist.name,taskArray:resultantlist.items,dayofweek:day});
            }
        }
    });
});





//creates a new task in the home route list and redirects to home route(/) to update the task list.
app.post('/',function(req,res){
    const newTask=req.body.task;
    const newList = req.body.list;

    const item = new Item({
        name:newTask
    });

    if(newList==='Today'){
        item.save();
        res.redirect('/');
    }
    else{
        List.findOne({name:newList},function(err,foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+newList);
        });
    }
});



// when this route is called then it checks for the checkboxstatus and if it having any value,
// then it will delete it from db by using the findByIdAndRemove PaymentMethodChangeEvent.
app.post('/delete',function(req,res){
    // console.log(req.body.checkboxstatus);
    const deletetask = req.body.checkboxstatus;
    const listName = req.body.listName;
    if(listName === "Today"){
        Item.findByIdAndRemove(deletetask,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log('Task deleted sucessfully!');
            }
        });
        res.redirect('/');
    }
    else{ //we are using findoneandupdate method to update the list item based on id and list name and here the update we do is delete the item from the list.
        List.findOneAndUpdate({name:listName},{$pull:{items:{_id:deletetask}}},function(err,foundList){ //$pull is a mongodb method which deletes an object from the array of objects(collection).
            if(!err){
                res.redirect('/'+listName);
            }
        });
    }
});



app.listen(PORT,function(){
    console.log("server started on port "+PORT+" bro!");
});