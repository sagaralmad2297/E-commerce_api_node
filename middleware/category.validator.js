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
const validateGetById=(req,res,next)=>{
    if (Number.isNaN(parseInt(req.params.id))) {
        return res.status(400).json({
            messaage:"invalid request params",
            success:false,
            err:"expecting valid integer for category",
            data:{}
            
        })
        
    }
    next();
}

const validateUpdate=(req,res,next)=>{
    if(!req.body.name || !req.params.description){
        return res.status(400).json({
            messaage:"invalid request params",
            success:false,
            err:"missing name and descreption",
            data:{}
    })
    
}
next();
}
const validatePartialUpdate=(req,res,next)=>{
    if(!(req.body.name||req.params.description)){
        return res.status(400).json({
            messaage:"invalid request params",
            success:false,
            err:"missing name and descreption",
            data:{}
    })
    }
    next();
}

const validatePaginator=(req,res,next)=>{
    const invalidQueryObject={
        
            messaage:'Invaid query arguments',
            success:false,
            data:{},
            err:'limit or offset should be valid number'
    }
    
    if(!(req.query.limit || req.query.offset)){
        next();
    }
    if(req.query.limit && Number.isNaN(parseInt(req.query.limit))){
        return res.status(400).json(invalidQueryObject)
}
if(req.query.offset && Number.isNaN(parseInt(req.query.offset))){
    return res.status(400).json(invalidQueryObject)
}
next();
}


module.exports={
validateCreate,
validateGetById,
validateUpdate,
validatePartialUpdate,
validatePaginator

}