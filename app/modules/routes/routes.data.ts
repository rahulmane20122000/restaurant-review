import { Route, Routes } from "./routes.types";
import userRouter from "../users/user.routes";
import reviewDetailsRouter from "../review/review.routes";
import authRouter from "../auth/auth.routes";
export const routes: Routes = [
  new Route("/users", userRouter),
  new Route("/role", reviewDetailsRouter),
  new Route("/auth", authRouter),
];
