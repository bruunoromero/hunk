import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true },
});
