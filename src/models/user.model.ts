import { Schema, model } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    phone: { type: Number, required: true, minLength: 10, maxLength: 10 },
    hashPassword: { type: String, required: true },
    // role: {
    //   type: String,
    //   enum: ["customer", "admin", "vendor", "manager", "reseller"],
    //   default: "customer",
    // },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Roles",
    },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const RolesSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    slug: { type: String, unique: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

const Roles = model("Roles", RolesSchema);
const User = model("User", UserSchema);

export { User, Roles };
