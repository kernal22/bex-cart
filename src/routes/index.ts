import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import categoryRouter from "./category.route";
import commonRouter from "./common.route";
import productRouter from "./product.route";

const _router = Router();

_router.use("/auth", authRouter);
_router.use("/user", userRouter);
_router.use("/category", categoryRouter);
_router.use("/co", commonRouter);
_router.use("/product", productRouter);

export default _router;
