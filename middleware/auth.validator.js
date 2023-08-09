const authservice=require('../services/auth.services');
const roleServies=require('../services/role.service');
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
 const checkAdmin=async (req,res,next)=>{
    const user=await authservice.getUserByid(req.user);
    const  role= await roleServies.getrole(1);
    const isAdmin=await user.hasRole(role);
    if(!isAdmin){
        return  res.status(401).json({
            message:'user not a admin',
            err:'not authorized',
            data:{},
            success:false
        })
    }
    next();
 }

 const checkSeller =async(req,res,next)=>{
    const user =await authservice.getUserByid(req.user);
    const role =await roleServies.getrole(2);
    const isSeller=await user.hasRole(role);
    if(!isSeller){
        return res.status(401).json({
            message:'user is not a seller',
            err:'not authorized',
            data:{},
            success:false
        })
    }
    next();
 }

 const isAdminOrseller=async (req,res,next)=>{
    const user=await authservice.getUserByid(req.user);
    const admin=await roleServies.getrole(1);
    const seller=await roleServies.getrole(2);
    if(!(user.hasRole(admin)||(user.hasRole(seller)))){
        return res.status(401).json({
            message:'Action only available to a valid admin or seller',
            err:'not authorized',
            data:{},
            success:false
        })
    }
    next();
 }


module.exports={
    validatesignup,
    validateSignin,
    isAuthenticted,
    checkAdmin,
    checkSeller,
    isAdminOrseller
}