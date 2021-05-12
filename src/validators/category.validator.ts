import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { check, validationResult } from "express-validator";

export const validateAddCategory = [
  check("name").notEmpty().withMessage("name required"),
  check("categoryImage").optional(),
  check("parentId").optional(),

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

export const validateUpdateCategory = [
  check("_id").notEmpty().withMessage("id required"),
  check("name").notEmpty().withMessage("name required"),
  check("status").notEmpty().withMessage("status required"),

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
