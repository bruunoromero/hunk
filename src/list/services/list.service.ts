import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { ItemService } from "./item.service";
import { List } from "../interfaces/list.interface";
import { CreateListDto } from "../dto/create-list.dto";
import { CreateItemDto } from "./../dto/create-item.dto";

@Injectable()
export class ListService {
  constructor(
    private readonly itemService: ItemService,
    @InjectModel("List") private readonly listModel: Model<List>,
  ) {}

  async create(createListDto: CreateListDto): Promise<List> {
    const createdList = new this.listModel(createListDto);
    return await createdList.save();
  }

  async find(listId: string) {
    return await this.listModel.findById(listId).exec();
  }

  async findOneBy(caluse: object): Promise<List> {
    return await this.listModel
      .findOne(caluse)
      .populate("items")
      .exec();
  }

  async findAllBy(clause: object): Promise<List> {
    return await this.listModel.find(clause).exec();
  }

  async delete(listId: string, userId: string): Promise<List> {
    const list = await this.find(listId);

    const deletes = list.items.map(itemId =>
      this.itemService.deleteFromList(itemId),
    );

    await Promise.all(deletes)

    return await this.listModel
      .deleteOne({ creator: userId, _id: listId })
      .exec();
  }

  async addItem(listId: string, itemToCreate: CreateItemDto) {
    const list = await this.find(listId);
    const item = await this.itemService.create(itemToCreate);

    list.items.push(item);
    return await list.save();
  }
}
