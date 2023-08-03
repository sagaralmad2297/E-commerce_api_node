const productcontroller=require('../controllers/product.controller');
const productValidator=require('../middleware/product.validator');
const routes=(app)=>{
    app.post('/ecom/api/v1/products',
     productValidator.ProductvalidateCreate,
    productcontroller.createProduct);
    
    app.get('/ecom/api/v1/products',
    productcontroller.getAllProduct);

    app.get('/ecom/api/v1/products/:id',
productcontroller.getProductById);

app.put('/ecom/api/v1/products/:id',
productValidator.productUpdateValidator,
productcontroller.updateProduct);

app.patch('/ecom/api/v1/products/:id',
productValidator.productPatchValidator,
productcontroller.updateProduct)

app.delete('/ecom/api/v1/products/:id',
productcontroller.deleteProduct);
}


module.exports=routes