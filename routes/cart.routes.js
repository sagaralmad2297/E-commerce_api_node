const cartController=require('../controllers/cart.controller');
const authValidator=require('../middleware/auth.validator');

const routes=(app)=>{
    app.post(
        '/ecom/api/v1/addToCart',
        authValidator.isAuthenticted,
        cartController.addToCart
    )
}

module.exports=routes;