const authController=require('../controllers/auth.controller');
const authValidator=require('../middleware/auth.validator')

const routes=(app)=>{
    app.post('/ecom/api/v1/signup',
    authValidator.validatesignup,
    authController.signup);

    app.post('/ecom/api/v1/signin',
    authValidator.validateSignin,
    authController.signin);
}



module.exports=routes;