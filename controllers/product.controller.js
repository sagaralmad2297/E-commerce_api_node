const productservice=require('../services/product.service');
const _=require('lodash');
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
    if(_.isEmpty(response) && !_.isUndefined(response)){
        serverError.err='No product found by given name';
        return res.status(404).json(serverError);
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

const getProductById=async(req,res)=>{
    const response=await productservice.findById(req.params.id);
    if(_.isEmpty(response) && !_.isUndefined(response)){
        serverError.err='No product found by given id';
        return res.status(404).json(serverError);
    }
    if(!response){
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message:'successfully fetch the procduct by id',
        success:true,
        data:response,
        err:{}
    })
}



module.exports={
    createProduct,
    getAllProduct,
    getProductById

}