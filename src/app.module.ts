import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ListModule } from "./list/list.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/hunk"),
    ListModule,
  ],
})
export class AppModule {}
