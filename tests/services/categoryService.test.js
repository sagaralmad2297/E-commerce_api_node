const {category}=require('../../models/index');
const categoryService=require('../../services/category.service');

const categoryPayload={
    name:'Test category',
    id:1,
    description:'This is a test category',
    update:jest.fn()
}

test('the category service should create a category',async()=>{
  const spy=jest.spyOn(category,'create').mockImplementation(()=>{
    return categoryPayload
  })
  const responce=await categoryService.create(categoryPayload);
  expect(spy).toHaveBeenCalled()
  expect(responce).toBe(categoryPayload)
});

test('the category service should return all categories ',async()=>{
    const spy=jest.spyOn(category,'findAll').mockImplementation(()=>{
        return [categoryPayload];
    })
    const responce=await categoryService.getall();
    expect(spy).toHaveBeenCalled();
    expect(responce).toContain(categoryPayload);
});

test('the category servies should return category by Id',async()=>{
    const spy=jest.spyOn(category,'findByPk').mockImplementation(()=>{
        return categoryPayload;
    })
    const responce=await categoryService.getById(1);
    expect(spy).toHaveBeenCalled();
    expect(responce).toEqual(categoryPayload);
})

test('the category service should update the category',async()=>{
    const spy1=jest.spyOn(category,'findByPk').mockImplementation(()=>{
        return categoryPayload;
    })
    const spy2=jest.spyOn(categoryPayload,'update').mockImplementation(()=>{
        return;
    })
    const responce=await categoryService.update({description:'new description'},1);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(responce).toBe(categoryPayload);
});

test('category service should not update the category',async()=>{
    const spy=jest.spyOn(category,'findByPk').mockImplementation(()=>{
        return undefined;
    })
    const responce=await categoryService.update({description:'new description'},1);
    expect(spy).toHaveBeenCalled();
    expect(responce).toEqual({})
})

