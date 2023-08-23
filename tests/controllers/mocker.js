function mockRequest(){
    const req={}
    req.body=jest.fn().mockReturnValue(req);
    req.params=jest.fn().mockReturnValue(req);
    req.query= jest.fn().mockReturnValue(req);
    return req;
   }
   
   
   function mockResponce(){
    const res={}
    res.json=jest.fn().mockReturnValue(res);
    res.status=jest.fn().mockReturnValue(res);
    res.send=jest.fn().mockReturnValue(res);
   }
   
   

   
   
module.exports={
    mockRequest, 
    mockResponce 
}