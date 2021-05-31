import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import { ICategoryAttribute } from "../entities";
import { Category, CategoryAttribute } from "../models";
import { FileUtils } from "../utils";
import mongoose from "mongoose";
export class CategoryService {
  public async createCategory(requestData: any, attachment: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let attachmentData: any = null;
        if (attachment) {
          attachmentData = await FileUtils.saveFile(attachment);
        }

        const categoryObj: any = {
          name: requestData.name,
          slug: slugify(requestData.name),
          attachment: attachmentData ? attachmentData._id : null,
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
        const { status, isDeleted, length, skip } = query;
        if (id) {
          condition = { _id: id };
        }
        if (status === "true" || status === "false") {
          condition.status = status == "true" ? true : false;
        }
        if (isDeleted === "true" || isDeleted === "false") {
          condition.isDeleted = isDeleted;
        }
        const data = await Category.find(condition)
          .sort({ createdAt: -1 })
          .populate("attachment");

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

  public async getSubCategory(params: any, query: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let condition: any = {};
        const { id } = params;
        const { status, isDeleted, length, skip } = query;
        if (id) {
          condition.parentId = id;
        }
        if (status === "true" || status === "false") {
          condition.status = status == "true" ? true : false;
        }
        if (isDeleted === "true" || isDeleted === "false") {
          condition.isDeleted = isDeleted;
        }
        const data: Array<any> = await Category.find(condition).sort({
          createdAt: -1,
        });

        if (data.length) {
          return resolve({
            status: true,
            data: data,
            message: "Sub category list",
          });
        } else {
          return resolve({
            status: false,
            message: "No Data found",
            data: data,
          });
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

  public async deleteCategory(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id, isDeleted } = requestData;
        let condition: any = {};
        condition.isDeleted = true;

        const data = await Category.findByIdAndUpdate(_id, condition, {
          new: true,
        });
        if (data) {
          return resolve({
            status: true,
            message: "deleted successfully",
          });
        } else {
          return resolve({ status: false, message: "something went wrong" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async addCategoryAttribute(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = [];
        const attributeExistArr = [];

        for (let item of requestData.attributes) {
          const { categoryId, name, values } = item;
          const slug = slugify(name.toLowerCase());
          const isAttributeExist = await CategoryAttribute.findOne({
            slug: slug,
          });
          if (isAttributeExist) {
            attributeExistArr.push(`${name} attribute already exist`);
          } else {
            values.map(
              (attr: any) => (attr["slug"] = slugify(attr.name.toLowerCase()))
            );
            const attributeData = { categoryId, name, slug, values };
            const newAttributeData = new CategoryAttribute(attributeData);
            const result = await newAttributeData.save();
            resp.push(result);
          }
        }

        return resolve({
          status: true,
          message: "Added successfully",
          data: resp,
          warning: attributeExistArr,
        });
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async getCategoryAttribute(query: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { id } = query;
        const ObjectId = mongoose.Types.ObjectId;
        const attributeLists: any = await Category.aggregate([
          {
            $match: { _id: ObjectId(id) },
          },
          {
            $project: {
              attributes: {
                $filter: {
                  input: "$attributes",
                  as: "attributes",
                  cond: { $eq: ["$$attributes.status", true] },
                },
              },
              _id: 0,
            },
          },
          { $unwind: "$attributes" },
        ]);
        if (attributeLists.length) {
          return resolve({
            status: true,
            data: attributeLists,
            message: "Attribute and its value list",
          });
        } else {
          return resolve({
            status: false,
            message: "No Data found",
            data: [],
          });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async getAllCategoryAttribute(query: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { skip, length, status } = query;
        const attributeLists: any = await CategoryAttribute.find({
          status: status || true,
        }).select({
          name: 1,
          _id: 1,
          categoryId: 1,
          values: 1,
          status: 1,
        });
        // const attributeLists: any = await Category.aggregate([
        //   {
        //     $project: {
        //       _id: 0,
        //       categoryName: "$name",
        //       categoryId: "$_id",
        //       attributes: {
        //         $filter: {
        //           input: "$attributes",
        //           as: "attributes",
        //           cond: { $eq: ["$$attributes.status", true] },
        //         },
        //       },
        //     },
        //   },
        //   { $unwind: "$attributes" },
        // ]);
        if (attributeLists.length) {
          return resolve({
            status: true,
            data: attributeLists,
            message: "Attribute and its value list",
          });
        } else {
          return resolve({
            status: false,
            message: "No Data found",
            data: [],
          });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async updateCategoryAttribute(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id, valueId, status, name, type } = requestData;
        let condition: any = {};
        let updateValues: any = {};

        if (type === "attr") {
          condition = { "attributes._id": _id };
          updateValues = { $set: { "attributes.$.status": status } };
        } else {
          condition = { "attributes._id": _id, "values._id": valueId };
          updateValues = { $set: { "values.$.status": status } };
        }

        const data = await Category.updateOne(condition, updateValues);

        if (data.nModified) {
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
      let catObj: any = {
        _id: cat._id,
        name: cat.name,
        slug: cat.slug,
        status: cat.status,
        isDeleted: cat.isDeleted,
      };
      if (cat.attachment) {
        catObj.attachmentId = cat.attachment._id;
        catObj.file = cat.attachment.filePath;
      }
      catObj.children = createCategory(categories, cat._id);
      categoryList.push(catObj);
    }
    return categoryList;
  } catch (error) {
    throw error;
  }
}
