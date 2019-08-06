var express = require('express')
const router = express.Router();

router.get("/", function(req,res){
res.render('prds')
})
router.get("/new", function(req,res){
res.send("products added")
})
router.get("/view", function(req,res){
res.send("products view")
})
router.get("/delete", function(req,res){
res.send("products deleted")
})
router.get("/edit", function(req,res){
res.send("product edited")
})

module.exports = router;
