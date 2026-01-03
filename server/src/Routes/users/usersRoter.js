const {Router}=require("express");
const {getAllHandlerUsers,postHandlerUser}=require("./hanldersUser")

const userRouter=Router();

userRouter.get("/",getAllHandlerUsers);
userRouter.post("/postUser",postHandlerUser)

module.exports=userRouter;