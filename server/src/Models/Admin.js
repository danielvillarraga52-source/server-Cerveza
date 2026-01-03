const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{
    sequelize.define("Admin",{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        }
        
    })
})