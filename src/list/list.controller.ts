import { Get, Controller } from "@nestjs/common";

import { ListService } from "./list.service";

@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  index() {
    return this.listService.create({ title: "teste" });
  }
}
