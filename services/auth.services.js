const {User,Role}=require('../models/index')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const signup=async (data) =>{
    try{
        const user=await User.create(data);
        const role=await Role.findOne({
            where:{
                name:'CUSTOMER'
            }
        })
        user.addRole(role);
        
        return user;
    }catch(err){
    console.log(err.name,err.message);
    
    if(err.name==='SequelizeValidationError'){
        return {
            error:err.message
        }
    }
    }
}

const getUserByEmail=async(userEmail)=>{
    try{
        const user=await User.findOne({
            where:{
                email:userEmail
            }
        })
        return user;
    }catch(err){
        console.log(err);
    }
    
}

 const getUserByid=async(id)=>{
    try{
        const user=await User.findByPk(id)
        return user;
    }catch(err){
        console.log(err);
    }
 }

const checkPassword=(userpassword,encryptedPassword)=>{
    return bcrypt.compareSync(userpassword,encryptedPassword);
}

const createToken=(user)=>{
    return jwt.sign(user,process.env.JWT_SECRET,{
        expiresIn:'2 days'
    });
}

const verifytoken=(token)=>{
    try{ 
       const response= jwt.verify(token,process.env.JWT_SECRET)
       return response;
    }catch(err){
        console.log(err);
    }
}

const updataUsername=async(id,name)=>{
    try{
    const  user=await User.findByPk(id);
    user.username=name;
    await user.save();
    return user;
    }catch(err){
        console.log(err);
    }
}




module.exports={
    signup,
    getUserByEmail,
    checkPassword,
    createToken,
    verifytoken,
    getUserByid,
    updataUsername

}