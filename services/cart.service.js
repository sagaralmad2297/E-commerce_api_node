const {Cart,Product,Cart_Products}=require('../models/index');

const STATUS={
    CREATION:'creation',
    PLACED:'placed',
    CANCELLED:'cancelled',
    DELIVERED:'delivered'
}

const addProductToCart=async (data)=>{
    try{
    const  cart=await Cart.findByPk(data.cartId);
    if(!cart.status=='creation'){
      return{
        error:'Order cannot be modified now'
      }
    }
    const product=await Product.findByPk(data.productId);
    if(!product){
        return{
            error:'no such product found'
        }
    }

    const entry=await Cart_Products.findOne({
        where:{
            cartId:cart.id,
            productId:product.id
        }
    })
    if(!entry){
        cart.addProduct(product, {through: {quantity: 1}})
    }else{
        await entry.increment('quantity',{by: 1})
    }
    
    return cart;
}catch(err){
    console.log(err);
}
}

const removeProductFromCart=async(data)=>{
    try{
        const  cart=await Cart.findByPk(data.cartId);
        if(!cart.status=='creation'){
          return{
            error:'Order cannot be modified now'
          }
        }
        const product=await Product.findByPk(data.productId);
        if(!product){
            return{
                error:'no such product found'
            }
        }
    
        const entry=await Cart_Products.findOne({
            where:{
                cartId:cart.id,
                productId:product.id
            }
        })
        if(!entry){
            return{
                error:'no such product added in the cart'
            }
        }else{
            await entry.decrement('quantity',{by: 1})
            if(entry.quantity==1){
                cart.removeProduct(product);
            }
        }
        return cart;

    }catch(err){
        console.log(err);
    }
}

const getCartByUser=async(uid, cartStatus)=>{
    try {
      const cart=await Cart.findOne({
        where:{
            userId:uid,
            status:cartStatus
        }
      })  
      return cart;
    } catch (err) {
        console.log(err)
        
    }
}

const createCart=async(uid)=>{
    try{
   const cart=await Cart.create({userId: uid})
   return cart
    }catch(err){
        console.log(err);
    }
}

const updatestatus=async(cartId,cartStatus)=>{
    try{
       const cart=await Cart.findByPk(cartId);
       if(cartStatus== STATUS.CREATION){
        return{
            error:'cannot edit the order'
        }
       }
       if(
        (cartStatus==STATUS.PLACED && cart.status==STATUS.CREATION)||
        (cartStatus==STATUS.CANCELLED && cart.status==STATUS.PLACED) ||
        (cartStatus==STATUS.DELIVERED && cart.status==STATUS.PLACED)
       ){
        cart.status=cartStatus
        await cart.save();
       }else{
        return{
            error:'Cannot modify the status'
        }
       }
       return cart;
    }catch(err){
        console.log(err);
    }
}

module.exports={
    addProductToCart,
    getCartByUser,
    createCart,
    removeProductFromCart,
    updatestatus
}