const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{sequelize.define("Products",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    nacionalidad:{
        type:DataTypes.STRING,
        allowNull:false

    },
    peso:{
        type:DataTypes.STRING,
        allowNull:false
    },
    alchol:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    imagen:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    }
},{timestap:true})})