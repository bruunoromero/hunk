import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Item } from "../interfaces/item.interface";
import { CreateItemDto } from "./../dto/create-item.dto";

@Injectable()
export class ItemService {
  constructor(@InjectModel("Item") private readonly listModel: Model<Item>) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.listModel(createItemDto);
    return await createdItem.save();
  }

  async deleteFromList(itemId: string) {
    return await this.listModel.deleteOne({ _id: itemId }).exec();
  }
}
