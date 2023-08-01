const categoryService=require('../services/category.service');
const createCategory=async (req,res)=>{
    const response=await categoryService.create(req.body);
    if(!response){
        return res.status(500).json({
            message:'something went wrong,not able to create category',
            success:false,
            data:{},
            err:'not able to create category'
        })
    
    }
    res.status(201).json({
        message:'successfully created the category',
        success:true,
        data:response,
        err:{}
    })
}




module.exports={
createCategory
}