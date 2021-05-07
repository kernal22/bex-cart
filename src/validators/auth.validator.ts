import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { check, validationResult } from "express-validator";

export const validateSignUp = [
  check("userName").notEmpty().withMessage("username required"),
  check("password").notEmpty().withMessage("password required"),
  check("firstName").notEmpty().withMessage("First Name required"),
  check("lastName").notEmpty().withMessage("Last Name required"),
  check("email")
    .notEmpty()
    .withMessage("Email required")
    .isEmail()
    .withMessage("Email format should be proper"),
  check("phone")
    .notEmpty()
    .withMessage("Phone required")
    .isNumeric()
    .withMessage("Phone must be a number")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must be 10 digit"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ errors: errors.array()[0].msg });
    }
    next();
  },
];

export const validateLogin = [
  check("userName").notEmpty().withMessage("username required"),
  check("password").notEmpty().withMessage("password required"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ errors: errors.array()[0].msg });
    }
    next();
  },
];
