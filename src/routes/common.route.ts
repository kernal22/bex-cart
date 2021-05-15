import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { createReadStream, unlinkSync } from "fs";
import { upload, uploadFileToS3 } from "../helpers";
import { Attachment } from "../models";
import { AuthMiddleware } from "../middlewares";

const _router = Router();

_router.put(
  "/upload/file",
  AuthMiddleware.verifyToken,
  upload.single("file"),
  async (req: Request, res: Response) => {
    try {
      const { path, filename } = req.file;
      const { _id } = req.body;
      let filePath = null;
      const readStream = createReadStream(path);
      unlinkSync(path);

      const attachmentFile: any = await uploadFileToS3(readStream, filename);

      if (attachmentFile.status) {
        filePath = attachmentFile.data.Location;
        const data = await Attachment.findByIdAndUpdate(
          _id,
          { filePath: filePath },
          { new: true }
        );
        if (data) {
          return res.status(StatusCodes.ACCEPTED).json({
            status: true,
            message: "Updated successfully",
            data: data,
          });
        } else {
          return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ status: false, message: "something went wrong" });
        }
      } else
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ status: false, message: "internal server error" });
    } catch (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: false, error: error });
    }
  }
);

export default _router;
