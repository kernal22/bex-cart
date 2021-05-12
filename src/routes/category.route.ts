import { Router } from "express";
import { validateAddCategory, validateUpdateCategory } from "../validators";
import { CategoryController } from "../controllers";
import { upload } from "../helpers";

const _router = Router();

/******************************************************************************
 *                     Add category and sub category - "POST /api/category"
 ******************************************************************************/

/**
 * @api {POST} /api/category admin add category and sub category
 * @apiName Admin-Add-Category-SubCategory-POST
 * @apiGroup Category
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
_router.post("/", upload.single("file"), CategoryController.createCategory);

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
 *                     Update Category or sub category - "PUT /api/category"
 ******************************************************************************/

/**
 * @api {PUT} /api/category update category or sub category
 * @apiName Update-category-or-sub-category
 * @apiGroup Category
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  * @apiExample Sample-Request:
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
_router.put("/", validateUpdateCategory, CategoryController.updateCategory);

export default _router;
