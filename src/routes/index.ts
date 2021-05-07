import { Router } from "express";
import authRouter from "./auth";

const _router = Router();

_router.use("/auth", authRouter);

export default _router;
