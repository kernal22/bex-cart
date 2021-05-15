import { Schema, model } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    parentId: { type: String },
    attachment: { type: Schema.Types.ObjectId, ref: "Attachment" },
    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

const Category = model("Category", CategorySchema);

export { Category };
