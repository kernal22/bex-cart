import slugify from "slugify";
import { Product } from "../models";
import { FileUtils } from "../utils";

export class ProductService {
  public async addProduct(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          name,
          category,
          subCategory,
          shortDescription,
          description,
          variant,
        } = requestData.body;

        const slug = slugify(name);

        variant = JSON.parse(variant);
        variant = variant["variant"];

        const addedBy = {
          userId: requestData.user._id,
          role: requestData.user.role.title,
        };

        let productData: any = {
          name,
          slug,
          category,
          subCategory,
          shortDescription,
          description,
          variant,
          addedBy,
          productsImages: [],
        };

        for (let attachment of requestData.files) {
          const attachmentData: any = await FileUtils.saveFile(attachment);
          if (attachment.fieldname === "thumbnailImage") {
            productData.thumbnailImage = attachmentData._id;
          } else {
            productData.productsImages.push(attachmentData._id);
          }
        }
        console.log(productData);
        const newProduct = new Product(productData);
        const data = await newProduct.save();
        if (data)
          return resolve({
            status: true,
            data: data,
            message: "Product Added Successfully",
          });
        else
          return resolve({
            status: false,
            data: data,
            message: "Something went wrong, try again",
          });
      } catch (error) {
        return reject(error);
      }
    });
  }
}
