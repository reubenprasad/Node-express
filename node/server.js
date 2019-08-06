var express = require('express');

const app = express();
app.get("/",function(req,res){
res.sendFile(__dirname+"/src/views/home.html")
});
app.get("/product",function(req,res){
res.sendFile(__dirname+"/src/views/product.html")
});
app.get("/employee",function(req,res){
res.sendFile(__dirname+"/src/views/emp.html")
});
app.get("/employee/pemp",function(req,res){
res.sendFile(__dirname+"/src/views/pemp.html")
});
app.get("/employee/pemp/:id",function(req,res){
res.send("Selected employee is :"+ req.params.id)
});
app.get("/employee/demp",function(req,res){
res.sendFile(__dirname+"/src/views/demp.html")
});
app.get("/product/wprd",function(req,res){
res.send("Wholesale")
});
app.get("/product/rprd",function(req,res){
res.send("Retail")
});
/* app.get("/books",function(req,res){
    res.send("book details")
})
app.get("/books/poems",function(req,res){
    res.send("poems...")
    res.send("malayalam poems...")
})

app.get("/author",function(req,res){
    res.send("Author")
})
app.get("/emp",function(req,res){
    res.send("Employee Details")
})
app.get("/prd",function(req,res){
    res.send("Product Details")
}) */

/* app.get(/.*fly/,function(req,res){
    res.send('/fly/')
})
 */
app.listen(9865, function(req,res){
    console.log("server started listening...");
})