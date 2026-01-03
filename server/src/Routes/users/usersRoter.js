const {Router}=require("express");
const {getHandlerUsers}=require("./hanldersUser")

const userRouter=Router();

userRouter.get("/",getHandlerUsers)

module.exports=userRouter;