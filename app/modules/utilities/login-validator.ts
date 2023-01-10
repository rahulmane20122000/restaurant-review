import { NextFunction, Request, Response } from "express";
import { loginDetails } from "../../database/restaurants-data";
import { ResponseHandler } from "./response-handler";

export const loginValidator = (req:Request,res:Response,next:NextFunction)=>{
     const {userName,password} = req.body;
     if(!userName || !password){
        next(new ResponseHandler(null,404,"Invalid Credentials!!"));
     }

     const userIndex = loginDetails.findIndex((data)=>data.userName === userName && data.password === password);
     if(userIndex!==-1){
        
        return next(); 
     }

     next(new ResponseHandler(null,404,"user Not Found"));
}