import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ListSchema } from "./list.schema";
import { ListService } from "./list.service";
import { ListController } from "./list.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: "List", schema: ListSchema }])],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
