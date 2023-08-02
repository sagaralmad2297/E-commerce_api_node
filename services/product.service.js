const {Product}=require('../models/index');

const create=async(data)=>{
   try{ const product=await Product.create(data); 
    return product;

   }catch(err){
    console.log("something went wrong");
    console.log(err);

   }
}



module.exports={
    create


}