var express = require('express')
const router = express.Router();
module.exports = router;
router.get("/",function(req,res){
    res.render("books",{pTitle:"Books",nav:[{link:"/book",title:"Book"},{link:"/author",title:"Author"}]});
})
router.get("/:id",function(req,res){
    res.render("books",{pTitle:"Books",nav:[{link:"/book",title:"Book"},{link:"/author",title:"Author"}]});
})
