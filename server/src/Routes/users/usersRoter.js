const {Router}=require("express");
const {getAllHandlerUsers,postHandlerUser,getHandlerUser,putHandlerUser,deleteHandlerUser}=require("./hanldersUser")

const userRouter=Router();

userRouter.get("/",getAllHandlerUsers);
userRouter.post("/postUser",postHandlerUser);
userRouter.get("/:id",getHandlerUser);
userRouter.put("/updateUser/:id",putHandlerUser);
userRouter.delete("/deleteUser/:id",deleteHandlerUser)

module.exports=userRouter;