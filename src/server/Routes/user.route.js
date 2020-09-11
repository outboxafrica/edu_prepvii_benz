// user Routes
const express = require('express');

const router = express.router();

const usercontroller = require("../controllers/user.controller");

router.get('/',(req,res)=>{
    res.json({
        message:"this route is working",
    });
});

//create user
router.post('/create',Usercontroller.Usercreate);

//get user details
router.get('/',Usercontroller.Userdetails);

//update user details
router.put('/update',Usercontroller.Userupdate);

module.exports = router;


