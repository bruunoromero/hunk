import { CreateListDto } from "../dto/create-list.dto";
import { Controller, Post } from "@nestjs/common";

import { ListService } from "../services/list.service";
import { BodyWithCreator } from "common/decorators/body-with-creator";

@Controller("lists-app/lists")
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  index(@BodyWithCreator() list: CreateListDto) {
    return this.listService.create(list);
  }
}
