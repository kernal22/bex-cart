import { IAttachment } from "../entities/Attachment";
import { createReadStream, unlinkSync } from "fs";
import { uploadFileToS3 } from "../helpers";
import { Attachment } from "../models";

export class FileUtils {
  constructor() {}

  public static async saveFile(attachment: IAttachment) {
    return new Promise(async (resolve, reject) => {
      try {
        const { path, filename } = attachment;
        const readStream = createReadStream(path);
        unlinkSync(path);
        const attachmentFile: any = await uploadFileToS3(readStream, filename);
        if (attachmentFile.status) {
          const filePath = attachmentFile.data.Location;
          const fileUpload = new Attachment({ filePath: filePath });
          const file = await fileUpload.save();
          if (file) {
            return resolve(file);
          } else {
            return reject({
              error: "FILE_UPLOAD_ERROR",
              message: "DB upload error",
            });
          }
        } else
          return reject({
            error: "FILE_UPLOAD_ERROR",
            message: "S3 upload error",
          });
      } catch (error) {
        return reject(error);
      }
    });
  }
}
