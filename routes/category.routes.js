const categoryController=require('../controllers/category.controller');
const categoryValidator=require('../middleware/category.validator');
const routes=(app)=>{
    app.post('/ecom/api/v1/category',
    categoryValidator.validateCreate,
    categoryController.createCategory);
}

module.exports=routes