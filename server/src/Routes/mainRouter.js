const {Router}=require("express")
const userRouter = require("./users/usersRoter")
const mainRouter=Router();

mainRouter.use("/users",userRouter);



module.exports=mainRouter;