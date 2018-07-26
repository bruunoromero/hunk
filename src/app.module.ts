import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserModule } from "user/user.module";
import { ListModule } from "list/list.module";

@Module({
  imports: [UserModule, ListModule],
})
export class AppModule {}
