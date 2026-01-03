const {Sequelize}=require("sequelize");
const usersModel=require("./Models/Users");



require("dotenv").config()

const {DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME}=process.env
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{logging:false})
usersModel(sequelize);

const {Users}=sequelize.models;


module.exports={
    ...sequelize.models,
    conn:sequelize
}