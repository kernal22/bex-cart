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
    role: {
      type: String,
      enum: ["customer", "admin", "vendor", "manager", "reseller"],
      default: "customer",
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);
export { User };
