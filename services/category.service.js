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

module.exports={
    create,
    getall
}