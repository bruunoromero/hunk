import { Document } from "mongoose";

export interface User extends Document {
  readonly _id: string;
}
