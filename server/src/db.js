const {Sequelize}=require("sequelize");
const usersModel=require("./Models/Users");
const productsModel=require("./Models/Products")
const adminModel=require("./Models/Admin");
const customerModel=require("./Models/Customer");
const sellerModel=require("./Models/Seller");



require("dotenv").config()

const {DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME}=process.env
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{logging:false})
usersModel(sequelize);
productsModel(sequelize);
adminModel(sequelize);
customerModel(sequelize);
sellerModel(sequelize)

const {Users,Products,Admin,Seller,Customer}=sequelize.models;


module.exports={
    ...sequelize.models,
    conn:sequelize
}