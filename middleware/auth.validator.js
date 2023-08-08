const validatesignup=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            message:'invalid arguments',
            success:false,
            data:{},
            err:'Email or password missing'
          })
    }
    next();
}

const validateSignin=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            message:'invalid arguments',
            success:false,
            data:{},
            err:'Email or password missing'
          })   
    }
    next();
}
module.exports={
    validatesignup,
    validateSignin
}