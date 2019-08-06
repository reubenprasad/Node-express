var express = require('express');
var bodyparser = require('body-parser')
const app = express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/login/views/login.html")
    });
app.post("/home",function(req,res){
    res.sendFile(__dirname+"/login/views/home.html")
    });
app.listen(4444, function(req,res){
    console.log("Server started listening")
})
