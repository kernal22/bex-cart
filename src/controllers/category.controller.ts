import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CategoryService } from "../services/index";

const _categoryService = new CategoryService();

export class CategoryController {
  public static async createCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.createCategory(
        req.body,
        req.file
      );
      if (data.status) {
        return res.status(StatusCodes.CREATED).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static async getCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.getCategory(
        req.params,
        req.query
      );
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.NO_CONTENT).json(data);
      }
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static async updateCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.updateCategory(req.body);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static handleError(req: Request, res: Response, error: any) {
    console.error(error);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ status: false, error: "BAD_REQUEST" });
  }
}
