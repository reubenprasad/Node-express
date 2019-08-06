var express = require('express')
var router = express.Router();
router.get("/", function(req,res){
    res.render("emps")
    })
router.get("/pemp", function(req,res){
    res.send("Permenant Employees")
    })
router.get("/demp", function(req,res){
    res.send("Daily Wage Employees")
    })

    module.exports = router;