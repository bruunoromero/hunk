import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);
