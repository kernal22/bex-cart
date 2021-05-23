import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subCategory: { type: Schema.Types.ObjectId, ref: "Category" },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    variant: [
      {
        price: { type: Number, required: true },
        offerPrice: { type: Number, required: true },
        offerPercentage: { type: Number, required: true },
        stock: { type: Number, required: true },
        quantity: { type: String, required: true },
      },
    ],
    thumbnailImage: {
      type: Schema.Types.ObjectId,
      ref: "Attachment",
      required: true,
    },
    productImages: [
      { type: Schema.Types.ObjectId, ref: "Attachment", required: true },
    ],
    addedBy: {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      role: { type: String, enum: ["admin", "vendor"], default: "admin" },
    },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
    deletedBy: {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      role: { type: String, enum: ["admin", "vendor"] },
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);
export { Product };
