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
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, error: error });
    }
  }
}
