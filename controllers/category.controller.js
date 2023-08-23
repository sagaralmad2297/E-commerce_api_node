const categoryService=require('../services/category.service');
const _=require('lodash');

const serverError={
    message:'something went wrong,not able to create category',
    success:false,
    data:{},
    err:'not able to do the operation on category'
}
const createCategory=async (req,res)=>{
    const response=await categoryService.create(req.body);
    console.log(response);
    if(!response){
        return res.status(500).json(serverError)
    
    }
   return res.status(201).json({
        message:'successfully created the category',
        success:true,
        data:response,
        err:{}
    })
}

    const getallcategories=async (req,res)=>{
        let response;
        if(req.query.name){
            response=await categoryService.getByName(req.query.name);
        }else{
response=await categoryService.getall();
        } 
        if(!response){
            return res.status(500).json({
                message:'not able to find the category',
                success:false,
                data:[],
                err:'category not present'
            })
        }
      return  res.status(200).json({
            message:'successfully fetched all the categories',
            success:true,
            data:response,
            err:{}
        })
    }

    const getCategoryById=async(req,res)=>{
        const response=await categoryService.getById(req.params.id);
        
       
        
        if(!response){
            return res.status(500).json(serverError);
        }
      return  res.status(200).json({
            message:'successfully fetched the category',
            success:true,
            date:response,
            err:{}
        })
    }

    const updateCategory=async(req,res)=>{
        const response=await categoryService.update(req.body,req.params.id);
        if(_.isEmpty(response) && !_.isUndefined(response)){
            serverError.message="not able to find the category";
            return res.status(400).json(serverError); 
        }
        if(!response){
            console.log(response)
            return res.status(500).json(serverError);
        }
        return res.status(200).json({
            message:'successfully updated the category',
            success:true,
            data:response,
            err:{}
        })
    }

    const destroyCategory=async(req,res)=>{
        const response=await categoryService.destroy(req.params.id);
        
        if(!response){
            return res.status(500).json(serverError);
        }
        return res.status(200).json({
            message:'successfully deleted the category',
            success:true,
            data:response,
            err:{}
        })
    }

    const getProductBycategory=async(req,res,next)=>{
        const response=await categoryService.getProducts(req.params.id,req.query);
        if(!response){
            return res.status(500).json(serverError);
        }
        return res.status(200).json({
            message:'successfully fetched the product of category',
            success:true,
            data:response,
            err:{}
        })
    next();
    }

    

    
    





module.exports={
createCategory,
getallcategories,
getCategoryById,
updateCategory,
destroyCategory,
getProductBycategory
}