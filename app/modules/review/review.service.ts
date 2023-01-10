import { NextFunction } from "express";
import { restaurantService } from "./review.schema";


const getAllReview = (userName:string,next:NextFunction)=>{
    const response = restaurantService.getAllReviews(userName,next);
    return response;
}

const getAllReviewAdmin = (role:string,next:NextFunction)=>{
    const response = restaurantService.getAllReviewsAdmin(role,next);
    return response;
}

export default {getAllReview,getAllReviewAdmin};