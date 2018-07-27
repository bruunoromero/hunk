import { Document } from "mongoose";
import { Item } from "./item.interface";

export interface List extends Document {
  readonly title: string;
  readonly creator: string;
  readonly description: string;
  readonly participants: string[];
  readonly items: string[] | Item[];
}
