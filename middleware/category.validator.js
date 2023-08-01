const validateCreate=(req,res,next)=>{
    if(!req.body.name){
        return res.status(400).json({
            messaage:"category name is missing,please try again by adding a category name",
            success:false,
            err:'parameters missing from request body',
            data:{},
            
        })
     
    }
    next();
}


module.exports={
validateCreate
}