const categoryService=require('../services/category.service');
const serverError={
    message:'something went wrong,not able to create category',
    success:false,
    data:{},
    err:'not able to create category'
}
const createCategory=async (req,res)=>{
    const response=await categoryService.create(req.body);
    if(!response){
        return res.status(500).json(serverError)
    
    }
    res.status(201).json({
        message:'successfully created the category',
        success:true,
        data:response,
        err:{}
    })
}

    const getallcategories=async (req,res)=>{
        const response=await categoryService.getall();
        if(!response){
            return res.status(500).json(serverError)
        }
        res.status(200).json({
            message:'successfully fetched all the categories',
            success:true,
            data:response,
            err:{}
        })
    }





module.exports={
createCategory,
getallcategories
}