const { Sequelize, DataTypes } = require('sequelize');
const Products = require('./product')
const config = require('../config/dbConfig');
const Users = require('./user');




const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, '', {
  host: config.DB_HOST,
  dialect: config.DB_DIALECT
});


sequelize.authenticate().then(() => {
    console.log('connection successull')
}).catch((  ) =>{
    console.log(err)
})


const db = {}





db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Add models here
db.products = Products(sequelize, DataTypes)
db.users = Users(sequelize, DataTypes)


db.sequelize.sync({force:false}).then(()=> {
    console.log('table sync successful')
}).catch((err) =>{
    console.log('err',err)
})



module.exports = db