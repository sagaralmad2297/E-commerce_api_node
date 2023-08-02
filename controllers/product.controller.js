const productservice=require('../services/product.service');
const serverError={
    message:'something went wrong',
    data:{},
    err:"not able to perform operation on products"
}
const createProduct=async (req,res)=>{
    const response=await productservice.create(req.body);
    if(!response){
    return res.status(500).json(serverError);
        
    }
    return res.status(201).json({
        message:"successfully added the product",
        success:true,
        data:response,
        err:{}
    })
}



module.exports={
    createProduct

}