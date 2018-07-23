import { Document } from "mongoose";

export interface List extends Document {
  readonly title: string;
}
