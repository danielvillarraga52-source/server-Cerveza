const {Users}=require("../../db");
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");



const getControllerUsers=async()=>{
    return await Users.findAll();
}

const postControllerUser = async(FirstName,secondName,firstLastName,secondLastName,email,password,country,rol,isActive)=>{
    if(!FirstName || !firstLastName||!email||!password||!country){
        throw Error(`faltan datos obligatorios`);
    }
    const emailVerify=await Users.findOne({where:{email:email}});
    if(emailVerify){
        throw Error("Email existe");
    }
    const salts=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salts);
    const createUser=await Users.create({
        FirstName,
        secondName,
        firstLastName,
        secondLastName,
        email,
        password:hashPassword,
        country,
        rol,
        isActive
    });
    return createUser;
};
const getControllerUser=async(id)=>{
    const idUser=await Users.findByPk(id);
    if(!idUser){
        throw Error(`No se encuentra este usuario ${id}`);
    }else{
         return idUser;
    }
    
};
const putControllerUser=async({id,password,country,isActive})=>{
    const idUpdate=await Users.findByPk(id);
    if(!idUpdate){
        throw Error(`No se encuentra este usuario ${id}`);
    }return await idUpdate.update({
        password,
        country,
        isActive
    })
    
    


};
const deleteControllerUser = async (id) => {
    
    const user = await Users.findByPk(id);
    if (!user) {
        throw new Error(`No se encuentra el usuario con id: ${id}`);
    }await user.destroy();

    
    return user; 
};

module.exports={
    getControllerUsers,
    postControllerUser,
    getControllerUser,
    putControllerUser,
    deleteControllerUser
}