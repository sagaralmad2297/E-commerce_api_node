const categoryController=require('../controllers/category.controller');
const categoryValidator=require('../middleware/category.validator');
const routes=(app)=>{
    app.post('/ecom/api/v1/category',
    categoryValidator.validateCreate,
    categoryController.createCategory);
    
    app.get('/ecom/api/v1/category',
    categoryController.getallcategories);
    app.get('/ecom/api/v1/category/:id',
    categoryValidator.validateGetById,
    categoryController.getCategoryById);
    
    app.put('/ecom/api/v1/category/:id',
    categoryValidator.validateUpdate,
    categoryController.updateCategory);

    app.patch('/ecom/api/v1/category/:id',
    categoryValidator.validatePartialUpdate,
    categoryController.updateCategory
);

app.delete('/ecom/api/v1/category/:id',
categoryController.destroyCategory
);
    
    
}



module.exports=routes