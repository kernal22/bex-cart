import { NextFunction, Request, Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { User } from "../models";
import { JwtHelperClass } from "../helpers/index";

export class AuthMiddleware {
  constructor() {}

  public static verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.headers["authorization"]?.startsWith("Bearer")) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Token is required" });
      }
      const token = <string>req.headers["authorization"]?.split(" ")[1];
      if (!token || token === undefined || token === "") {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          status: false,
          message: "Token is required",
        });
      } else {
        const jwt = new JwtHelperClass();
        const isVerified = jwt.verifyToken(token);
        if (isVerified) {
          const myReq: any = (req as any) as any;
          myReq["user"] = isVerified;
          next();
        } else {
          return res.status(StatusCodes.UNAUTHORIZED).send({
            status: false,
            error: true,
            message: getReasonPhrase(StatusCodes.UNAUTHORIZED),
          });
        }
      }
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: true,
        message: error.message,
      });
    }
  }

  public static adminMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const myReq: any = (req as any) as any;
      if (myReq.user.role !== "admin") {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ message: "Access denied" });
      }
      next();
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: true,
        message: error.message,
      });
    }
  }

  public static userMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const myReq: any = (req as any) as any;
      if (myReq.user.role !== "user") {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ message: "Access denied" });
      }
      next();
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: true,
        message: error.message,
      });
    }
  }

  public static async findUser(req: any, res: Response, next: NextFunction) {
    try {
      let _id = req["user"]["_id"];
      const data = await User.findOne({ _id: _id }).populate("role");
      req["user"] = data;
      next();
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: true,
        message: error.message,
      });
    }
  }
}
