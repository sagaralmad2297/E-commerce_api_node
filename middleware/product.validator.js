
const ProductvalidateCreate=(req,res,next)=>{
    if(!req.body.name||!req.body.cost){
        return res.status(400).json({
            message:'invalid request body',
            success:false,
            data:{},
            err:'either name or cost is missing from the request object'
        })
    }
    next();
}



module.exports={
    ProductvalidateCreate

}