import { Schema, model } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    parentId: { type: String },
    categoryImage: {
      type: Schema.Types.ObjectId,
      ref: "Attachment",
      required: true,
    },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Category = model("Category", CategorySchema);

export { Category };
