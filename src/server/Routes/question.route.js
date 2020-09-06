const express = require('express');

const router = router.express();

router.get('/question',(res,req)=>{
    res.send('welcome to ask');
});

//create a question
router.post('/question/create',question.controller.Userqtn);

//update the question 
router.put('/question/update',question.controller.Userqtn);

//delete the question 
router.delete('/question/delete',question.controller.Userqtn);

module.exports = router;