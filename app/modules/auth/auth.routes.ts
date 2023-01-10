import { Router } from "express";
import { authentication } from "../utilities/authentication-authorisation";
import { loginValidator } from "../utilities/login-validator";

const router = Router();


router.post('/login',loginValidator,authentication);
export default router;