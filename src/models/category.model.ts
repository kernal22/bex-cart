import { Schema, model } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    parentId: { type: String },
    attachment: { type: Schema.Types.ObjectId, ref: "Attachment" },
    attributes: [
      {
        name: { type: String },
        slug: { type: String, unique: true, lowercase: true },
        status: { type: Boolean, enum: [true, false], default: true },
        values: [
          {
            name: { type: String, lowercase: true },
            slug: { unique: true, type: String },
            status: { type: Boolean, enum: [true, false], default: true },
          },
        ],
      },
    ],
    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

const Category = model("Category", CategorySchema);

export { Category };
