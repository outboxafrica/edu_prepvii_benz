const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require("../models/user");
const bcryt = require('bcryt');
//signUp 
router.post('/signup',(res, req, next)=>{
    user.find({
        email:req.body.email
    })
    .exec()
    .then(user =>{
        if (user.length >= 1) {
            return res.json({
                message:"mail exits"
            });
        } else{
             bcrypt.hash(req.body.password, 10, (err,hash)=>{
            if(err) {
                return res.status(500).json({
                    error:err
                });
                    } else {
                        const user = new user({
                            _id:new mongoose.Types.ObjectId(),
                            email:req.body.email,
                            password:hash
                        });
                        user
                        .save()
                        .then(result=> {
                            console.log(result);
                            res.json({
                                message:"user created"
                            });
                        })
                        .catch(err=>{
                            res.json({
                                error:err
                            });
                        });
                    }
            });
        }  
});

});

module.exports = router;