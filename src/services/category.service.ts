import { createReadStream, unlinkSync } from "fs";
import slugify from "slugify";
import { Category } from "../models";
import { uploadFileToS3 } from "../helpers";
export class CategoryService {
  public async createCategory(requestData: any, attachment: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let filePath: any = null;
        if (attachment) {
          const { path, filename } = attachment;
          const readStream = createReadStream(path);
          unlinkSync(path);
          const attachmentFile: any = await uploadFileToS3(
            readStream,
            filename
          );
          if (attachmentFile.status) filePath = attachmentFile.data.Location;
          else return resolve(attachmentFile);
        }

        const categoryObj: any = {
          name: requestData.name,
          slug: slugify(requestData.name),
          filePath: filePath,
        };

        if (requestData.parentId) {
          categoryObj["parentId"] = requestData.parentId;
        }
        const newCat = new Category(categoryObj);
        const res = await newCat.save();
        if (res)
          return resolve({ status: true, message: "Added Successfully" });
        else
          return resolve({
            status: false,
            message: "Something went wrong",
          });
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async getCategory(params: any, query: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let condition: any = {};
        const { id } = params;
        const { status, length, skip } = query;
        if (id) {
          condition = { _id: id };
        }
        if (status === "true" || status === "false") {
          condition.status = status == "true" ? true : false;
        }
        const data = await Category.find(condition).sort({ createdAt: -1 });
        if (data) {
          if (id) {
            return resolve({ status: true, data: data });
          }
          let categoryList = createCategory(data);
          return resolve({ status: true, data: categoryList });
        } else {
          return resolve({ status: false, message: "No Data found" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async updateCategory(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id, status, name } = requestData;
        let condition: any = {};

        if (status === false || status === true) {
          condition.status = status;
        }
        if (name) {
          condition.name = name;
        }
        const data = await Category.findByIdAndUpdate(_id, condition, {
          new: true,
        });
        if (data) {
          return resolve({
            status: true,
            message: "updated successfully",
            data: data,
          });
        } else {
          return resolve({ status: false, message: "something went wrong" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }
}

function createCategory(categories: any, parentId: any = null): Array<any> {
  try {
    let category;
    let categoryList = [];
    if (parentId == null) {
      category = categories.filter((item: any) => item.parentId == undefined);
    } else {
      category = categories.filter((item: any) => item.parentId == parentId);
    }
    for (let cat of category) {
      categoryList.push({
        _id: cat._id,
        name: cat.name,
        slug: cat.slug,
        status: cat.status,
        filePath: cat.filePath,
        children: createCategory(categories, cat._id),
      });
    }
    return categoryList;
  } catch (error) {
    throw error;
  }
}
