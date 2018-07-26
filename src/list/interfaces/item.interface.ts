import { Document } from "mongoose";

export interface Item extends Document {
  readonly title: string;
  readonly creator: string;
  readonly description: string;
}
