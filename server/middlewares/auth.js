import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated =(req,res,next)=>{

    const token = req.cookies["connect.sid"];
    console.log("token:",token);
    
    if(!token){
    return next(new ErrorHandler("Not Logged In",401));
    }
    next();
}