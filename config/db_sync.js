const db=require('../models/index');
function syncdb(forceSync){
    if(forceSync){
    db.sequelize.sync({force: true});
    }else{
        db.sequelize.sync();
    }
}

module.exports=syncdb;