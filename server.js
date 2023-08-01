const express=require('express');
const bodyParser=require('body-parser');
const categoryRoutes=require('./routes/category.routes');
require('dotenv').config();


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('views','./views')
app.set('view engine','ejs')

app.get('/home',(req,res)=>{
res.render('home');
})
categoryRoutes(app);

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})