var express=require('express')

const router=express.Router();

router.get("/",function(req,res){
    res.render('prdhome')
})
router.get("/new",function(req,res){
    res.send("products added")
})
router.get("/edit",function(req,res){
    res.render('prdhome')
})


module.exports=router;