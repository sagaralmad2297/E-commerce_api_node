const {category}=require('../models/index');
const create =async (data)=>{
    try{
     const Category=await category.create({
        name:data.name,
        description:data.description
     })
     return Category;
    }catch(err){
        console.log("something went wrong");
        console.log(err);


    }
}

const getall=async()=>{
    try{
        const categories=await category.findAll();
        return categories

    }catch(err){
        console.log('something went wrong');
        console.log(err);
    }
}

const getById=async(categoryId)=>{
    try{
        const categoryid=await category.findByPk(categoryId);
        return categoryid;

    }catch(err){
        console.log('something went wrong');
        console.log(err);
    }
}

const getByName=async(categoryName)=>{
    try{
        const categoryname=await category.findOne({
            where:{
                name:categoryName
            }
        })
        return categoryname
    }catch(err){
        console.log("something went wrong");
        console.log(err);

    }
}

const update=async(data,categoryId)=>{
    try{
      const Category=await category.findByPk(categoryId);
      
      if(!Category){
        console.log("not able to find category ");
        return {}
      }
      await Category.update(data);
      return Category;
    }catch(err){
        console.log("something went wrong")

    }
}

const destroy=async(categoryId)=>{
    try{
        const Category=await category.findByPk(categoryId);
        await Category.destroy();
        return true;

    }catch(err){
        console.log("something went wrong");
        console.log(err);
    }
}









module.exports={
    create,
    getall,
    getById,
    getByName,
    update,
    destroy
}