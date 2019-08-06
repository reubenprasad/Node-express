var express = require('express');
var bodyparser = require('body-parser')
const app = express();
var book_array = [{name:"Book1",author:"Auth1",price:890},{name:"Book2",author:"Auth2",price:890},{name:"Book3",author:"Auth3",price:790}]
app.set("view engine","ejs");
app.set("views", "./login/views")

app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("login")
    });
app.post("/home",function(req,res){
    res.render("home",{user:req.body.uname});
    });
app.get("/books",function(req,res){
    res.render("books",{books:book_array});
    });
app.listen(4444, function(req,res){
    console.log("Server started listening")
})
