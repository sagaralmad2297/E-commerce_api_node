const cartService=require('../services/cart.service');


const serverError={
    message:'something went wrong,',
    success:false,
    data:{},
    err:'not able to do the operation '
}

const STATUS={
    CREATION:'creation',
    PLACED:'placed',
    CANCELLED:'cancelled',
    DELIVERED:'delivered'
}

const addToCart=async(req,res)=>{
  let cart=await cartService.getCartByUser(req.user, STATUS.CREATION)
  if(!cart){
    cart=await cartService.createCart(req.user)
  }
  const response=await cartService.addProductToCart({
    productId:req.body.productId,
    cartId:cart.id
  })
  if(!response){
    return res.status(500).json(serverError);
  }
  if(response.error){
   return res.status(403).json({
    message:'cannot add product to cart',
    success:false,
    data:{},
    err:response.error
   })
  }
 
  return res.status(200).json({
    message:'successfully added product to cart',
    success:true,
    err:{},
    data:response
  })
}
 const removeFromCart=async(req,res)=>{
    let cart=await cartService.getCartByUser(req.user,STATUS.CREATION);
    if(!cart){
        return res.status(400).json({
            message:'No product in the cart',
            data:{},
            err:'invalid operation on cart'
        })
    }
    const response=await cartService.removeProductFromCart({
        productId:req.body.productId,
        cartId:cart.id
    });
    if(!response){
        return res.status(500).json(serverError);
       }
    if(response.error){
        return res.status(403).json({
         message:'cannot remove product from cart',
         success:false,
         data:{},
         err:response.error
        })
       }
       
       return res.status(200).json({
        message:'successfully removed product from  cart',
        success:true,
        err:{},
        data:response
       })
 }

 const updateOrderStatus=async(req,res)=>{
    const response=await cartService.updatestatus(req.params.id,req.body.status);
    if(!response){
        return res.status(500).json(serverError);
    }
    if(response.error){
        return res.status(403).json({
            message:'Cannot update status',
            err:response.error,
            data:{},
            success:false 
        })
    }
    return res.status(200).json({
        message:'successfully updated the  order',
        success:true,
        err:{},
        data:response

    })

 }

 const getTotalPrice=async(req,res)=>{
 const response=await cartService.getPriceOfCart(req.params.id);
 console.log(response);
 if(!response){
    return res.status(500).json(serverError)
 }
 return res.status(200).json({
    message:'Successfully calculated the total cost of the cart',
    err:{},
    success:true,
    data:response
 })
 }
module.exports={
    addToCart,
    removeFromCart,
    updateOrderStatus,
    getTotalPrice

}