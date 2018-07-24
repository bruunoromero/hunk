import { Get, Controller } from "@nestjs/common";

import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index() {
    return this.userService.create({ firebaseId: "teste" });
  }
}
