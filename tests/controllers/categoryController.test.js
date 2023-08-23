const {mockRequest,mockResponce}=require('./mocker');
const categoryController=require('../../controllers/category.controller');
const categoryService=require('../../services/category.service');

const categoryPayload={
    name:'Test category',
    id:1,
    description:'This is a test category',
    update:jest.fn()
}
const productPayload={
    name:'Test product',
    id:1,
    description:'This is a test product',
    cost:1000
}

test('category controller should create a catergory',async()=>{
    const spy=jest.spyOn(categoryService,'create').mockImplementation(()=>{
       return categoryPayload;
    })
    const req=mockRequest();
    const res=mockResponce();
    const responce=await categoryController.createCategory(req,res);
    console.log(responce);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(201)
    expect(res.json).toHavaBeenCalled({
        message:'successfully created the category',
        success:true,
        data:categoryPayload,
        err:{}
    })
})

test('category controller should not create a catergory',async()=>{
    const spy=jest.spyOn(categoryService,'create').mockImplementation(()=>{
       return undefined;
    })
    const req=mockRequest();
    const res=mockResponce();
    const responce=await categoryController.createCategory(req,res);
    console.log(responce);
    expect(spy).toHavaBeenCalled()
   expect(res.status).toHavaBeenCalledWith(500)
    expect(res.json).toHavaBeenCalled({
        message:'something went wrong,not able to create category',
    success:false,
    data:{},
    err:'not able to do the operation on category'
    })
})

test('category controller should return all the categories',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getByName').mockImplementation(()=>{
       return [categoryPayload];
      
    })
    const responce=await categoryController.getallcategories(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(200)
    expect(res.json).toHavaBeenCalled({
        message:'successfully fetched all the categories',
        success:true,
        data:[categoryPayload],
        err:{}
    })
})

test('category controller should return all the categories',async()=>{
    const req=mockRequest();
    req.query={};
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getAll').mockImplementation(()=>{
       return [categoryPayload];
      
    })
    const responce=await categoryController.getallcategories(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(200)
    expect(res.json).toHavaBeenCalled({
        message:'successfully fetched all the categories',
        success:true,
        data:[categoryPayload],
        err:{}
    })
})

test('category controller should return all the categories',async()=>{
    const req=mockRequest();
    req.query={};
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getAll').mockImplementation(()=>{
       return undefined;
      
    })
    const responce=await categoryController.getallcategories(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(200)
    expect(res.json).toHavaBeenCalled({
        message:'not able to find the category',
                success:false,
                data:[],
                err:'category not present'
        
    })
})

test('category controller should return category by id',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getById').mockImplementation(()=>{
       return categoryPayload;
      
    })
    const responce=await categoryController.getCategoryById(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(200)
    expect(res.json).toHavaBeenCalled({
        message:'successfully fetched the category',
        success:true,
        date:categoryPayload,
        err:{}
    })

})

test('category controller should  not return category by id',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getById').mockImplementation(()=>{
       return undefined;
      
    })
    const responce=await categoryController.getCategoryById(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(500)
    expect(res.json).toHavaBeenCalled({
        message:'something went wrong,not able to create category',
    success:false,
    data:{},
    err:'not able to do the operation on category'
    })

})

test('category controller should update category',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'update').mockImplementation(()=>{
       return {};
       
    })
    const responce=await categoryController.updateCategory(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(400)
    expect(res.json).toHavaBeenCalled({
        message:'not able to find the category',
        success:false,
        data:{},
        err:'not able to do the operation on category'
    })

})

test('category controller should not update category',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'update').mockImplementation(()=>{
       return ;
       
    })
    const responce=await categoryController.updateCategory(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(500)
    expect(res.json).toHavaBeenCalled({
        message:'not able to find the category',
        success:false,
        data:{},
        err:'not able to do the operation on category'
    })

})

test('category controller should delete category',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'destroy').mockImplementation(()=>{
       return categoryPayload ;
       
    })
    const responce=await categoryController.destroyCategory(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(200)
    expect(res.json).toHavaBeenCalled({
        message:'successfully deleted the category',
            success:true,
            data:{},
            err:{}
    })

})

test('category controller should delete category',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'destroy').mockImplementation(()=>{
       return ;
       
    })
    const responce=await categoryController.destroyCategory(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(500)
    expect(res.json).toHavaBeenCalled({
        message:'not able to find the category',
        success:false,
        data:{},
        err:'not able to do the operation on category'
        
    })

})

test('category controller should return products by category',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getProducts').mockImplementation(()=>{
       return [productPayload];
       
    })
    const responce=await categoryController.getProductBycategory(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(200)
    expect(res.json).toHavaBeenCalled({
        message:'successfully fetched the product of category',
            success:true,
            data:productPayload,
            err:{}
    })

})

test('category controller should not return products by category',async()=>{
    const req=mockRequest();
    const res=mockResponce();
    const spy=jest.spyOn(categoryService,'getProducts').mockImplementation(()=>{
       return ;
       
    })
    const responce=await categoryController.getProductBycategory(req,res);
    expect(spy).toHavaBeenCalled()
    expect(res.status).toHavaBeenCalledWith(500)
    expect(res.json).toHavaBeenCalled({
        message:'not able to find the category',
        success:false,
        data:{},
        err:'not able to do the operation on category'
        
    })

})



