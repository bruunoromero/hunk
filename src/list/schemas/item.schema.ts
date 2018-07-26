import * as mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: {
    ref: "User",
    type: String,
    required: true,
  },
});
