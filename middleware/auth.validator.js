const authservice=require('../services/auth.services');
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

const isAuthenticted= async(req,res,next)=>{
    const token=req.headers["x-access-token"];
    if(!token){
        return res.status(401).json({
            message:'JWT token missing',
            success:false,
            data:{},
            err:'invalid or missing argument in request'
        })
    }
    const response= authservice.verifytoken(token);
    if(!response){
        return res.status(401).json({
             message:'JWT not verified',
             success:false,
             data:{},
             err:'invalid auth details'
        })
    }
    const user=await authservice.getUserByid(response.id);
    if(!user){
        return res.status(404).json({
            message:'jwt for invalid user sent',
            success:false,
            data:{},
            err:'invalid credeintials'
        })

    }
    req.user=user.id; //we are going to save req.user as authenticated users id
    next();
    
}
module.exports={
    validatesignup,
    validateSignin,
    isAuthenticted
}