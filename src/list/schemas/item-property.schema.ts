import * as mongoose from "mongoose";

export const ItemPropertySchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { timestamps: true },
);
