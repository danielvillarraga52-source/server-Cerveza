const {DataTypes}=require("sequelize");


module.exports=((sequelize)=>{
    sequelize.define("Users",{
        id:{
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue:DataTypes.UUIDV4
        },
        FirstName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        secondName:{
            type:DataTypes.STRING,
            allowNull:true
        },
        firstLastName:{
            type:DataTypes.STRING,
            allowNull:false

        },
        secondLastName:{
            type:DataTypes.STRING,
            allowNull:true
        },

        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false,
            validate: {
        isEmail: true, // Valida formato de email
      }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        rol:{
            type:DataTypes.ENUM,
            values:["Admin","Customer","seller"],
            defaultValue:"Customer"
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
        }
    })
})