import { NextFunction } from "express";
import { restaurantsData } from "../../database/restaurants-data";
import { ResponseHandler } from "../utilities/response-handler";

class RestaurantService {
  getAllReviews(userName: string, next: NextFunction) {
    console.log(userName);
    const restaurantIndex = restaurantsData.findIndex(
      (value) => value.manager === userName
    );
    if (restaurantIndex !== -1) {
      const reviews = restaurantsData[restaurantIndex].review;
      
      return reviews.length !== 0
        ? next(new ResponseHandler(reviews, 200))
        : next(new ResponseHandler(null, 404, "No Reviews"));
    }

    next(new ResponseHandler(null, 404, "User Not Found"));
  }

  getAllReviewsAdmin(role:string,next:NextFunction){
    if(role === 'admin'){
      return next(new ResponseHandler(restaurantsData,200));
    }
    return next(new ResponseHandler(null,401,"UNAUTHORISED!!!"));
  }
}

export const restaurantService = new RestaurantService();
