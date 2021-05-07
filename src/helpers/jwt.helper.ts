import { readFileSync } from "fs";
import { sign, SignOptions, VerifyOptions, verify } from "jsonwebtoken";
import path from "path";
import { get } from "config";

export class JwtHelperClass {
  constructor() {}

  public generateToken(data: any) {
    // PRIVATE
    const keyPath = path.join(__dirname, "/../../private.key");
    const privateKey = readFileSync(keyPath, "utf-8");

    // SIGNING OPTIONS
    const signOptions: SignOptions = {
      issuer: get("token.issuer"),
      expiresIn: get("token.expiresIn"),
      jwtid: get("token.jwtid"),
      algorithm: "RS256",
    };

    //Token generation
    let token = sign(
      { _id: data._id, role: data.role },
      privateKey,
      signOptions
    );
    return token;
  }

  public verifyToken(token: string) {
    //PUBLIC key
    const keyPath = path.join(__dirname, "/../../public.key");
    const publicKey = readFileSync(keyPath, "utf-8");

    // VERIFY OPTIONS
    const verifyOptions: VerifyOptions = {
      issuer: process.env.JWT_ISSUER,
      jwtid: process.env.JWT_ID,
      algorithms: ["RS256"],
    };

    // verify token and return
    try {
      const ValidToken = verify(token, publicKey, verifyOptions);
      return ValidToken;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
