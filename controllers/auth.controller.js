const authService=require('../services/auth.services')
const serverError={
    message:'Something went wrong',
    success:false,
    data:{},
    err:'operation not successful'
}
const signup =async (req,res)=>{
    const response=await authService.signup(req.body);
    if(response.error){
        res.status(400).json({
            message:response.error,
            success:false,
            data:{},
            err:'invalid crediential'
        })
    }
    if(!response){
        return res.status(500).json(serverError);
    }
    
    return res.status(200).json({
        message:'successfully sign up',
        success:true,
        data:response,
        err:{}
    })
}



module.exports={
    signup

}