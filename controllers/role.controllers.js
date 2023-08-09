const roleServies=require('../services/role.service');

const serverError={
    message:'something went wrong',
    data:{},
    err:"not able to perform operation"
}
const addRoleToUser=async (req,res)=>{
    const response=roleServies.addRole(req.body.userId,req.body.roleId);
    if(!response){
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message:'successfully add the role the user',
        data:response,
        success:true,
        err:{}
    })
}

const removeRoleFromUser =async (req,res)=>{
    const response=roleServies.removeRole(req.body.userId,req.body.roleId);
    if(!response){
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message:'successfully revoked  role from the user',
        data:response,
        success:true,
        err:{}
    })
}

module.exports={
    addRoleToUser,
    removeRoleFromUser
}