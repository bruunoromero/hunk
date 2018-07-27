import { Document } from "mongoose";
import { ItemProperty } from "./item-property.interface";

export interface Item extends Document {
  readonly title: string;
  readonly image: string;
  readonly creator: string;
  readonly completed: boolean;
  readonly description: string;
  readonly properties: string[] | ItemProperty[];
}
