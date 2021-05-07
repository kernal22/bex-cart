import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthService } from "../services/index";

const _authService = new AuthService();

export class AuthController {
  public static async signUp(req: Request, res: Response) {
    try {
      const data: any = await _authService.signUp(req.body);
      if (data.status) {
        return res.status(StatusCodes.CREATED).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, error: error });
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const data: any = await _authService.login(req.body);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(data);
      }
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, error: error });
    }
  }
}
