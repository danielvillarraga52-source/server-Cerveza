const{postControllerUser,getControllerUsers,getControllerUser,putControllerUser,deleteControllerUser}=require("./controllerUser")

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
const getHandlerUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const userId=await getControllerUser(id);
        res.status(200).json(userId);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};
const putHandlerUser=async(req,res)=>{
    const {id}=req.params;
    const {email,password,country,isActive}=req.body;
    try {
        const updateUser=await putControllerUser({id,email,password,country,isActive});
        res.status(200).json(updateUser);
    } catch (error) {
        
    }
};
const deleteHandlerUser=async(req,res)=>{
    const {id}=req.params;
    console.log(id)
    try {
        const deleteUser = await deleteControllerUser(id);
        res.status(200).json(deleteUser);
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


module.exports={getAllHandlerUsers,
    postHandlerUser,
    getHandlerUser,
    putHandlerUser,
    deleteHandlerUser
}