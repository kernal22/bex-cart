import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import categoryRouter from "./category.route";

const _router = Router();

_router.use("/auth", authRouter);
_router.use("/user", userRouter);
_router.use("/category", categoryRouter);

export default _router;
