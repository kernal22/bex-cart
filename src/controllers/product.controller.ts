import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ProductService } from "../services";

const _productService = new ProductService();

export class ProductController {
  constructor() {}

  public static async addProduct(req: Request, res: Response) {
    try {
      const data: any = await _productService.addProduct(req);
      if (data.status) {
        return res.status(StatusCodes.CREATED).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      ProductController.handleError(req, res, error);
    }
  }

  public static handleError(req: Request, res: Response, error: any) {
    console.error(error);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ status: false, error: error, message: error.message });
  }
}
