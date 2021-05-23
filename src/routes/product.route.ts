import { Router } from "express";
import {
  validateAddCategory,
  validateDelete,
  validateUpdateCategory,
} from "../validators";
import { ProductController } from "../controllers";
import { upload } from "../helpers";
import { AuthMiddleware } from "../middlewares";

const _router = Router();

_router.post(
  "/",
  AuthMiddleware.verifyToken,
  AuthMiddleware.findUser,
  upload.any(),
  ProductController.addProduct
);

export default _router;
