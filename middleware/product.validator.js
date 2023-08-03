
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
const productUpdateValidator=(req,res,next)=>{
    if((!req.body.name)||!req.body.description||!req.body.cost){
        return res.status(400).json({
            message:'invalid request body',
            success:false,
            data:{},
            err:'either name,description or cost is missing from the request object'
        })
    }
    next();
}

const productPatchValidator=(req,res,next)=>{
    if(!(req.body.name||req.body.description||req.body.cost)){
        return res.status(400).json({
            message:'invalid request body',
            success:false,
            data:{},
            err:'Atleast one parameter among name and decription is expected'
        })
    }
    next();
}



module.exports={
    ProductvalidateCreate,
    productUpdateValidator,
    productPatchValidator

}