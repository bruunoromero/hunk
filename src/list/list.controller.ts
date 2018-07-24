import { Get, Controller, Post } from "@nestjs/common";

import { ListService } from "./list.service";

@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  index() {
    return "Ola mundo";
    // return this.listService.create({ title: "teste" });
  }
}
