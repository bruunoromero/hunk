import { CreateItemDto } from "./../dto/create-item.dto";
import { Controller, Post, Param, Get, Delete } from "@nestjs/common";

import { CreateListDto } from "../dto/create-list.dto";
import { ListService } from "../services/list.service";
import { User } from "../../common/decorators/user.decorator";
import { BodyWithCreator } from "../../common/decorators/body-with-creator";

@Controller("lists-app/lists")
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  async index(@User() user) {
    return await this.listService.findAllBy({ creator: user.uid });
  }

  @Get(":id")
  async view(@User() user, @Param("id") listId) {
    return await this.listService.findOneBy({ creator: user.uid, _id: listId });
  }

  @Post()
  async create(@BodyWithCreator() list: CreateListDto) {
    return await this.listService.create(list);
  }

  @Delete(":id")
  async delete(@User() user, @Param("id") listId) {
    return await this.listService.delete(listId, user.uid);
  }

  @Post(":id/items")
  async addItem(
    @Param("id") listId: string,
    @BodyWithCreator() item: CreateItemDto,
  ) {
    return await this.listService.addItem(listId, item);
  }
}
