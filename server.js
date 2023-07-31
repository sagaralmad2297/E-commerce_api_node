const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})