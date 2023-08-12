const {Cart}=require('../models/index');
const authservice=require('../services/auth.services');
const roleServies=require('../services/role.service');

const validateStatusUpdate=async(req,res,next)=>{
    const user=await authservice.getUserByid(req.user);
    const  role= await roleServies.getrole(1);
    const isAdmin=await user.hasRole(role);
    const cart=await Cart.findByPk(req.params.id);
    if(!isAdmin && cart.userId!==req.user){
        return  res.status(401).json({
            message:'Cannot update order',
            err:'not authorized',
            data:{},
            success:false
        })
    }
    next();
}

module.exports={
    validateStatusUpdate
}
