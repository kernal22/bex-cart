import { Router } from "express";
import authRouter from "./auth";
import userRouter from "./user";

const _router = Router();

_router.use("/auth", authRouter);
_router.use("/user", userRouter);

export default _router;
