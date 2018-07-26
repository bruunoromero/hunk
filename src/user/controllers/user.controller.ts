import * as firebaseAdmin from "firebase-admin";
import { Controller, Post, Body } from "@nestjs/common";

import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "common/decorators/user.decorator";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@User() user, @Body() userBody = {}) {
    const userToCreate = { ...userBody, _id: user.uid };

    return await this.userService.create(userToCreate);
  }
}
