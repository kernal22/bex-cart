import { Router } from "express";
import { AuthController } from "../controllers/index";
import { validateLogin, validateSignUp } from "../validators/index";

const _router = Router();

/******************************************************************************
 *                     Auth SIGNUP - "POST /api/auth/sign-up"
 ******************************************************************************/

/**
 * @api {post} /api/auth/sign-up admin sign-up
 * @apiName User-Sign-Up-POST
 * @apiGroup Auth
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *   {
 *      "firstName": "sanjay",
 *      "lastName": "kumar",
 *      "userName": "sanju2212",
 *      "email": "sanjayjnu22@gmail.com",
 *      "phone": 9090911111,
 *      "password": "11111"
 *    }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Sign Up Successfully ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Already exist user"
 *       "data":null
 *     }
 */
_router.post("/sign-up", validateSignUp, AuthController.signUp);

/******************************************************************************
 *                     Auth Admin LOGIN - "POST /api/auth/login"
 ******************************************************************************/

/**
 * @api {post} /api/auth/login admin login
 * @apiName Admin-Login-POST
 * @apiGroup Auth
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *   {
 *       "userName": "admin",
 *       "password": "admin"
 *   }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Login In Successfully ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Wrong Username/Password"
 *       "data":null
 *     }
 */
_router.post("/login", validateLogin, AuthController.login);

export default _router;
