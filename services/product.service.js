const {Product}=require('../models/index');
const { Op }=require('sequelize');

const create=async(data)=>{
   try{ const product=await Product.create(data); 
    return product;

   }catch(err){
    console.log("something went wrong");
    console.log(err);

   }
}

const getall=async()=>{
    try{
       const product=await Product.findAll();
       return product;
    }catch(err){
     console.log("something went wrong");
     console.log(err);
    }
}

const findByName =async(name)=>{
    try{
       const product=await Product.findAll({
        where:{
            name:{
                [Op.like]:`${name}%`
            }
        }
       })
       return product;
    }catch(err){
        console.log("something went  wrong");
        console.log(err);
    }
}


module.exports={
    create,
    getall,
    findByName


}