import { Roles, User } from "../models";
import slugify from "slugify";
import { IRoles } from "../entities";

export class UserService {
  constructor() {}

  public async getUserList(params: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { role, _id } = params;
        const condition: any = {};
        if (role) {
          condition["role"] = role;
        }
        if (_id) {
          condition["_id"] = _id;
        }

        const list = await User.find(condition).populate("role");
        if (list.length) {
          let userArray: Array<any> = [];
          for (let item of list) {
            const {
              _id,
              firstName,
              lastName,
              email,
              phone,
              userName,
              role,
              status,
            } = item;
            userArray.push({
              _id,
              firstName,
              lastName,
              email,
              phone,
              userName,
              role,
              status,
            });
          }
          return resolve({ status: true, data: userArray });
        }
        return resolve({ status: false, data: [] });
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async updateUser(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          firstName,
          lastName,
          email,
          phone,
          status,
          userName,
          _id,
        } = requestData;
        const data = await User.findByIdAndUpdate(
          { _id: _id },
          { $set: { firstName, lastName, phone, status } },
          { new: true }
        ).exec();
        if (data) {
          const { firstName, lastName, phone, status } = data;
          return resolve({
            status: true,
            message: "updated successfully",
            data: { firstName, lastName, phone, status },
          });
        } else {
          return resolve({ status: false, message: "something went wrong" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async deleteUser(id: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await User.findByIdAndUpdate(
          id,
          { status: false },
          { new: true }
        ).exec();
        if (data) {
          const { status } = data;
          return resolve({
            status: true,
            message: "Deleted Successfully",
            data: { status },
          });
        } else {
          return resolve({ status: false, message: "something went wrong" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async getUserRoles() {
    return new Promise(async (resolve, reject) => {
      try {
        const list = await Roles.find().exec();
        if (list.length) {
          return resolve({ status: true, data: list });
        }
        return resolve({ status: false, data: list });
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async createRole(requestData: IRoles) {
    return new Promise(async (resolve, reject) => {
      try {
        const slug = slugify(requestData.title);
        const isSlugData = await Roles.findOne({
          $or: [{ slug: slug }, { title: requestData.title }],
        }).exec();
        if (isSlugData) {
          return resolve({ status: false, message: "Role Already Exist" });
        } else {
          const obj = { title: requestData.title, slug: slug };
          const _newRole = new Roles(obj);
          const data = await _newRole.save();
          if (data) {
            return resolve({
              status: true,
              message: "Role added successfully",
            });
          } else {
            return resolve({ status: false, message: "Something went wrong" });
          }
        }
      } catch (error) {
        return reject(error);
      }
    });
  }
}
