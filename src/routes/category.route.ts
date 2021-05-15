import { Router } from "express";
import {
  validateAddCategory,
  validateDelete,
  validateUpdateCategory,
} from "../validators";
import { CategoryController } from "../controllers";
import { upload } from "../helpers";
import { AuthMiddleware } from "../middlewares";

const _router = Router();

/******************************************************************************
 *                     Add category and sub category - "POST /api/category"
 ******************************************************************************/

/**
 * @api {POST} /api/category admin add category and sub category
 * @apiName Admin-Add-Category-SubCategory-POST
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *   {
 *      "name": "Fruit",
 *      "categoryImage": (binary),
 *      "parentId": "asas7878b9un9ninni"
 *    }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Added successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "message"
 *       "data":null
 *     }
 */
_router.post(
  "/",
  AuthMiddleware.verifyToken,
  upload.single("file"),
  CategoryController.createCategory
);

/******************************************************************************
 *                     category List - "GET /api/category"
 ******************************************************************************/

/**
 * @api {GET} /api/category<id> category and sub category List list
 * @apiName All-category-sub-category list
 * @apiGroup category
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "category Lists ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "No data"
 *       "data":null
 *     }
 */
_router.get("/:id?", CategoryController.getCategory);

/******************************************************************************
 *                     sub category List - "GET /api/category/sub-category/<parentId>"
 ******************************************************************************/

/**
 * @api {GET} /api/category/sub-category/<parentId> sub category List list
 * @apiName sub-category-list
 * @apiGroup category
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "sub category Lists ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "No data"
 *       "data":null
 *     }
 */
_router.get("/sub-category/:id", CategoryController.getSubCategory);

/******************************************************************************
 *                     Update Category or sub category - "PUT /api/category"
 ******************************************************************************/

/**
 * @api {PUT} /api/category update category or sub category
 * @apiName Update-category-or-sub-category
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *   {
 *      "status": "true",
 *      "name": "kumar"
 *    }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Updated successfully ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "data":null
 *     }
 */
_router.put(
  "/",
  AuthMiddleware.verifyToken,
  validateUpdateCategory,
  CategoryController.updateCategory
);

/******************************************************************************
 *                     Delete Category or sub category - "DELETE /api/category"
 ******************************************************************************/

/**
 * @api {DELETE} /api/category delete category or sub category
 * @apiName Delete-category-or-sub-category
 * @apiGroup Category
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  * @apiExample Sample-Request:
 *   {
 *      "_id": "djbsakdksjd473bk",
 *    }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "deleted successfully ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "data":null
 *     }
 */
_router.delete(
  "/",
  AuthMiddleware.verifyToken,
  validateDelete,
  CategoryController.deleteCategory
);

export default _router;
