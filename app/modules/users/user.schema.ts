import { NextFunction } from "express";
import { restaurantsData } from "../../database/restaurants-data";
import { ResponseHandler } from "../utilities/response-handler";

class UserSchema { 
    postReview(reviewDetails:any,next:NextFunction){
        const {restaurantName,userName,food,ambiance,service,cleanliness,overall} = reviewDetails;
        if(!restaurantName || !userName){
          return next(new ResponseHandler(null,404,"restaurant Name or userName missing!!!"));
        }
        if(!food || !ambiance || !service || !cleanliness || !overall){
           return next(new ResponseHandler(null,404,"Values Missing"));
        }
       
        const restaurantIndex = restaurantsData.findIndex((data)=> data.restaurantName === restaurantName); 
        if(restaurantIndex!==-1){
            restaurantsData[restaurantIndex].review.push({userName:userName,food:food,ambiance:ambiance,service:service,cleanliness:cleanliness,overAll:overall} as any);
           return next(new ResponseHandler("review added!!",200));
        }

       return next(new ResponseHandler(null,404,"Resto not Found!!"));

        
    }
}

export const userSchema = new UserSchema();

