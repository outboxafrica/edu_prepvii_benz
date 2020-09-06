const express = require('express');

const router = router.express();

//test the route 
router.get('/',(req,res)=>{
    res.json({
        message:"answer route working"
    })
});

//give an answer 
router.post('/answer/create',answer.controller.UserAnswer);

//update
router.put('/answer/update',answer.controller.UserAnswer);

//delete Answer
router.delete('/answer/delete',answer.controller.UserAnswer);
