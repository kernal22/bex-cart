import { Schema, model } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    parentId: { type: String },
    filePath: { type: String },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Category = model("Category", CategorySchema);

export { Category };
