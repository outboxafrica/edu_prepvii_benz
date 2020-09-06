const router = require("./signup.route");

router.post("/login",(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length >= 1){
        return res.json({
            message:"mail not found, user doesnt exist"
        });
    }else{
        bcryt.compare(req.body.password, user[0].password, (err,result)=>{
            if(err){
                return res.json({
                    message:"failed"
                });
            }
            if(result){
                jwt.sign({
                    email:user[0].email
                })
                return res.json({
                    message:"succesful"
                });
            }
        });
    }
 })
    .catch(err=>{
        res.json({
            message:error
        })
    });
});

module.exports = route;