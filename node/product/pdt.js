var express = require('express')
var bodyparser = require('body-parser')
var prd_details = [{name:"",price}]
const app = express();
app.set("view engine","ejs")
app.set("views", "./views")
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.render("home")
})
app.get("/newpdt",function(req,res){
    res.render("newpdt");
});
app.get("/viewpdt",function(req,res){
     res.render("viewpdt")
});    
app.post("/added",function(req,res){
     res.render("viewpdt",)
});    
app.get("/rempdt",function(req,res){
    res.render("rempdt")
});
app.listen(8080, function(req,res){
    console.log("Server started listening")
})