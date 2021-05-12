import AWS from "aws-sdk";
import { get } from "config";

const aws_s3: any = get("aws_s3bucket");

const s3 = new AWS.S3({
  accessKeyId: aws_s3.AWS_ACCESS_KEY,
  secretAccessKey: aws_s3.AWS_SECRET_ACCESS_KEY,
  region: aws_s3.REGION,
});

export const uploadFileToS3 = async (fileStream: any, fileName: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        Bucket: aws_s3.Bucket,
        Key: fileName,
        Body: fileStream,
      };
      const data = await s3.upload(params).promise();

      if (data) {
        return resolve({ status: true, data: data });
      } else {
        return resolve({ status: true, message: "File Upload fails" });
      }
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
};
