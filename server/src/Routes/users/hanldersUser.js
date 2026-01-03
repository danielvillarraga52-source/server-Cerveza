const{postControllerUser,getControllerUsers}=require("./controllerUser")

const getAllHandlerUsers =async (req,res)=>{
    try {
        const allUsers= await getControllerUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const postHandlerUser =async (req,res)=>{

    const {FirstName,secondName,firstLastName,secondLastName,email,password,country,rol,isActive}=req.body;

    try {
        const newUser = await postControllerUser(FirstName,secondName,firstLastName,secondLastName,email,password,country,rol,isActive);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}



module.exports={getAllHandlerUsers,
    postHandlerUser
}