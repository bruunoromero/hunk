import "mongoose-type-url";
import * as mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: mongoose.Schema.Types.Url },
    description: { type: String, required: true },
    creator: { ref: "User", type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    properties: [{ ref: "ItemProperty", type: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true },
);
