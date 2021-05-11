import { Router } from "express";
import { CategoryController } from "src/controllers";
// import { upload } from "../helpers";
import multer from "multer";
const upload = multer({ dest: "data" });

const _router = Router();

_router.post(
  "/",
  upload.single("categoryImage"),
  CategoryController.createCategory
);

export default _router;
