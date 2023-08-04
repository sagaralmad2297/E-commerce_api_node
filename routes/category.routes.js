const categoryController=require('../controllers/category.controller');
const categoryValidator=require('../middleware/category.validator');
const routes=(app)=>{
    app.post('/ecom/api/v1/categories',
    categoryValidator.validateCreate,
    categoryController.createCategory);
    
    app.get('/ecom/api/v1/categories',
    categoryController.getallcategories);
    app.get('/ecom/api/v1/categories/:id',
    categoryValidator.validateGetById,
    categoryController.getCategoryById);
    
    app.put('/ecom/api/v1/categories/:id',
    categoryValidator.validateUpdate,
    categoryController.updateCategory);

    app.patch('/ecom/api/v1/categories/:id',
    categoryValidator.validatePartialUpdate,
    categoryController.updateCategory
);

app.delete('/ecom/api/v1/categories/:id',
categoryController.destroyCategory
);

app.get('/ecom/api/v1/categories/:id/products',
categoryValidator.validatePaginator,
categoryController.getProductBycategory);
    
    
}



module.exports=routes