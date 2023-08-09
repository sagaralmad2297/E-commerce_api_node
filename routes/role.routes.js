const roleController=require('../controllers/role.controllers');
const authValidator=require('../middleware/auth.validator');

const routes=(app)=>{
app.post('/ecom/api/v1/role',
authValidator.isAuthenticted,
authValidator.checkAdmin,
roleController.addRoleToUser)

app.delete('/ecom/api/v1/role',
authValidator.isAuthenticted,
authValidator.checkAdmin,
roleController.removeRoleFromUser)
}

module.exports=routes;