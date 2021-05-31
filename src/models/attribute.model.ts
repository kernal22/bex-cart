import { Schema, model } from "mongoose";

const CategoryAttributeSchema: Schema = new Schema(
  {
    categoryId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String },
    slug: { type: String, unique: true, lowercase: true },
    values: [
      {
        name: { type: String, lowercase: true },
        slug: { unique: true, type: String },
        status: { type: Boolean, enum: [true, false], default: true },
      },
    ],
    status: { type: Boolean, enum: [true, false], default: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

const CategoryAttribute = model("CategoryAttribute", CategoryAttributeSchema);

export { CategoryAttribute };
