import { model, Schema } from "mongoose";

const RolesSchema = new Schema({
  name: { type: String },
});

const Roles = model("Roles", RolesSchema);
