import * as mongoose from "mongoose";

export const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    participants: [{ type: String, ref: "User" }],
    creator: { ref: "User", type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
  },
  { timestamps: true },
);
