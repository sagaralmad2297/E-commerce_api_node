const {mockRequest,mockResponce}=require('./mocker');
const categoryController=require('../../controllers/category.controller');
const categoryService=require('../../services/category.service');

const categoryPayload={
    name:'Test category',
    id:1,
    description:'This is a test category',
    update:jest.fn()
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

test('category controller should create a catergory',async()=>{
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