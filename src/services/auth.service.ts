import { IAuth, IUser } from "src/entities";
import { User } from "../models/index";
import { argon2id, hash, verify } from "argon2";
import { JwtHelperClass } from "../helpers/index";

export class AuthService {
  public async signUp(requestData: IUser) {
    return new Promise(async (resolve, reject) => {
      try {
        const isEmail = await User.findOne({ email: requestData.email }).exec();
        if (isEmail) {
          return resolve({ status: false, message: "Email Already Exist" });
        } else {
          const isUser = await User.findOne({
            userName: requestData.userName,
          }).exec();
          if (isUser) {
            return resolve({ status: false, message: "Username Exist" });
          }
          const hashPassword = await hash(requestData.password, {
            type: argon2id,
            hashLength: 45,
            memoryCost: 2 ** 16,
          });
          const {
            firstName,
            lastName,
            userName,
            email,
            phone,
            role,
          } = requestData;
          const _user = new User({
            firstName,
            lastName,
            userName,
            email,
            phone,
            role,
            hashPassword,
          });
          const data = await _user.save();
          if (data)
            return resolve({ status: true, data: "User created successfully" });
          else
            return resolve({ status: false, message: "Something went wrong" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async login(requestData: IAuth) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(requestData);
        const user = await User.findOne({
          userName: requestData.userName,
        }).exec();

        if (user) {
          const isPasswordMatched = await verify(
            user.hashPassword,
            requestData.password
          );
          if (isPasswordMatched) {
            const jwtHelper = new JwtHelperClass();
            const token = jwtHelper.generateToken(user);
            const { _id, firstName, lastName, userName, email, phone } = user;
            return resolve({
              status: true,
              message: "Login In Successfully",
              data: {
                token: token,
                user: { _id, firstName, lastName, userName, email, phone },
              },
            });
          } else {
            return resolve({ status: false, message: "Wrong Password" });
          }
        } else {
          return resolve({ status: false, message: "Wrong Username" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }
}
