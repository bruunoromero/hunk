import { Document } from "mongoose";

export interface ItemProperty extends Document {
  readonly type: string;
  readonly value: string;
}
