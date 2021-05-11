import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserService } from "../services/index";

const _userService = new UserService();

export class UserController {
  public static async getUserList(req: Request, res: Response) {
    try {
      const data: any = await _userService.getUserList(req.query);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.NO_CONTENT).json(data);
      }
    } catch (error) {
      UserController.handleError(req, res, error);
    }
  }

  public static async updateUser(req: Request, res: Response) {
    try {
      const data: any = await _userService.updateUser(req.body);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.NOT_MODIFIED).json(data);
      }
    } catch (error) {
      UserController.handleError(req, res, error);
    }
  }

  public static async deleteUser(req: Request, res: Response) {
    try {
      const data: any = await _userService.deleteUser(req.body);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.NOT_MODIFIED).json(data);
      }
    } catch (error) {
      UserController.handleError(req, res, error);
    }
  }

  public static async getUserRoles(req: Request, res: Response) {
    try {
      const data: any = await _userService.getUserRoles();
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.NO_CONTENT).json(data);
      }
    } catch (error) {
      UserController.handleError(req, res, error);
    }
  }

  public static async createRole(req: Request, res: Response) {
    try {
      const data: any = await _userService.createRole(req.body);
      if (data.status) {
        return res.status(StatusCodes.CREATED).json(data);
      } else {
        return res.status(StatusCodes.BAD_REQUEST).json(data);
      }
    } catch (error) {
      UserController.handleError(req, res, error);
    }
  }

  public static handleError(req: Request, res: Response, error: any) {
    console.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, error: "INTERNAL_SERVER_ERROR" });
  }
}
