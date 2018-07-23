import { Get, Controller } from '@nestjs/common';

@Controller()
export class ListController {
  constructor() {}

  @Get()
  index(): string {
    return "List controller"
  }
}
