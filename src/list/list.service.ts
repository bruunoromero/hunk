import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { List } from "./interfaces/list.interface";
import { CreateListDto } from "./dto/create-list.dto";

@Injectable()
export class ListService {
  constructor(@InjectModel("List") private readonly listModel: Model<List>) {}

  async create(createListDto: CreateListDto): Promise<List> {
    const createdList = new this.listModel(createListDto);
    return await createdList.save();
  }

  async findAll(): Promise<List[]> {
    return await this.listModel.find().exec();
  }
}
