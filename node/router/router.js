var express = require('express');
var prdrouter = require("./routes/prdrouter") //Add the link to prdrouter.js
var emprouter = require("./routes/emprouter") //Add the link to emprouter.js
var bodyparser = require('body-parser')
const app = express();
 app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use("/prd",prdrouter);                  //whatever starts with prd , send it to prd router
app.use("/emp",emprouter);
app.get("/",function(req,res){
    res.render('home')
    });

    app.listen(3333, function(req,res){
        console.log("Server started listening")
    })