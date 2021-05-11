import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";

const _router = Router();

_router.use("/auth", authRouter);
_router.use("/user", userRouter);

export default _router;
