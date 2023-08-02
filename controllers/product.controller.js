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

const getAllProduct=async(req,res)=>{
    let response;
    if(!req.query.name){

     response=await productservice.getall();
    }else{
        response=await productservice.findByName(req.query.name)
    }
    if(!response){
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message:"successfully fetched the products",
        success:true,
        data:response,
        err:{}
    })
}



module.exports={
    createProduct,
    getAllProduct

}