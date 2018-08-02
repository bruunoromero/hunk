import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Delete,
  Controller,
} from "@nestjs/common";
import * as R from "ramda";

import { CreateListDto } from "../dto/create-list.dto";
import { ListService } from "../services/list.service";
import { UpdateListDto } from "../dto/update-list-dto";
import { CreateItemDto } from "./../dto/create-item.dto";
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
    return await this.listService.findOne(listId, user.uid);
  }

  @Post()
  async create(@BodyWithCreator() list: CreateListDto) {
    return await this.listService.create(list);
  }

  @Patch(":id")
  async update(
    @User() user,
    @Param("id") listId: string,
    @Body() listBody: UpdateListDto,
  ) {
    const list = R.pick(["title", "description"], listBody);
    return await this.listService.update(list, listId, user.uid);
  }

  @Delete(":id")
  async delete(@User() user, @Param("id") listId) {
    return await this.listService.delete(listId, user.uid);
  }

  @Post(":id/items")
  async createItem(
    @Param("id") listId: string,
    @BodyWithCreator() item: CreateItemDto,
  ) {
    return await this.listService.createItem(listId, item);
  }
}
