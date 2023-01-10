import { Router } from "express";
import { authorization } from "../utilities/authentication-authorisation";



import managerService from "./review.service"
const router = Router();

const {getAllReview,getAllReviewAdmin} = managerService;

router.get("/manager/getMyReviews",authorization,(req,res,next)=>{
    const userName = res.locals.userName
    getAllReview(userName,next);
});

router.get("/admin/getAllReviews",authorization,(req,res,next)=>{
    const role = res.locals.role;
    getAllReviewAdmin(role,next);
})

export default router;