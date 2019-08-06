var express = require('express');
var prdrouter=require('./Routes/prdrouter')
const app = express();
 app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/prd",prdrouter)

app.get("/",function(req,res){
    res.render('home')
})

app.listen(3333, function(req,res){
        console.log("Server started listening")
})