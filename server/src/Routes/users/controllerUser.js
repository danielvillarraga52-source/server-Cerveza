const {Users}=require("../../db");


const getControllerUsers=async()=>{
    return await Users.findAll();
}

const postControllerUser = async(FirstName,secondName,firstLastName,secondLastName,email,password,country,rol,isActive)=>{
    if(!FirstName || !firstLastName||!email||!password||!country){
        throw Error(`faltan datos obligatorios`);
    }
    const createUser=await Users.create({
        FirstName,secondName,firstLastName,secondLastName,email,password,country,rol,isActive
    });
    return createUser;
};


module.exports={
    getControllerUsers,
    postControllerUser
}