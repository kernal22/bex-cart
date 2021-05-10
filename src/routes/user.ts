import { Router } from "express";
import { UserController } from "../controllers/index";

const _router = Router();

/******************************************************************************
 *                     User List - "GET /api/user"
 ******************************************************************************/

/**
 * @api {GET} /api/user user list
 * @apiName All-User-Lists
 * @apiGroup Admin
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
 *       "message": "User Lists ",
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
_router.get("/", UserController.getUserList);

/******************************************************************************
 *                     Update User - "PUT /api/user"
 ******************************************************************************/

/**
 * @api {PUT} /api/user update user
 * @apiName Update-User-Details
 * @apiGroup Admin
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  * @apiExample Sample-Request:
 *   {
 *      "firstName": "sanjay",
 *      "lastName": "kumar",
 *      "phone": 9090911111,
 *      "password": "11111"
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
_router.put("/", UserController.updateUser);

/******************************************************************************
 *                     Update User - "DELETE /api/user"
 ******************************************************************************/

/**
 * @api {DELETE} /api/user Delete User
 * @apiName Delete-User
 * @apiGroup Admin
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  * @apiExample Sample-Request:
 *   {
 *      "_id": "6093d5329d21796ff463e422"
 *    }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Deleted successfully ",
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
_router.delete("/", UserController.deleteUser);

/******************************************************************************
 *                     Roles List - "GET /api/user/role"
 ******************************************************************************/

/**
 * @api {GET} /api/user/role User Roles List
 * @apiName All-User-Role-List
 * @apiGroup Admin
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
 *       "message": "User Role Lists ",
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
_router.get("/role", UserController.getUserRoles);

export default _router;
