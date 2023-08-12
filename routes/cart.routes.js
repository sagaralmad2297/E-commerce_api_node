const cartController=require('../controllers/cart.controller');
const authValidator=require('../middleware/auth.validator');
const orderValidator=require('../middleware/order.validator');

const routes=(app)=>{
    app.post(
        '/ecom/api/v1/addToCart',
        authValidator.isAuthenticted,
        cartController.addToCart
    )
    
    app.post(
        '/ecom/api/v1/removeFromCart',
        authValidator.isAuthenticted,
        cartController.removeFromCart
    )

    app.patch(
        '/ecom/api/v1/:id',
        authValidator.isAuthenticted,
        orderValidator.validateStatusUpdate,
        cartController.updateOrderStatus
    )

    app.get(
        '/ecom/api/v1/cart/:id/total',
        authValidator.isAuthenticted,
        cartController.getTotalPrice
    )
}

module.exports=routes;