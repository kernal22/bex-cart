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

  public static async getSubCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.getSubCategory(
        req.params,
        req.query
      );
      return res.status(StatusCodes.OK).json(data);
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

  public static async deleteCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.deleteCategory(req.body);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static async addCategoryAttribute(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.addCategoryAttribute(req.body);
      if (data.status) {
        return res.status(StatusCodes.CREATED).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static async getCategoryAttribute(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.getCategoryAttribute(req.query);
      return res.status(StatusCodes.OK).json(data);
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static async getAllCategoryAttribute(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.getAllCategoryAttribute(
        req.query
      );
      return res.status(StatusCodes.OK).json(data);
    } catch (error) {
      CategoryController.handleError(req, res, error);
    }
  }

  public static async updateCategoryAttribute(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.updateCategoryAttribute(
        req.body
      );
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
      .json({ status: false, error: error, message: error.message });
  }
}
