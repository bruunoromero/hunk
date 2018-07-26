import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ListSchema } from "./schemas/list.schema";
import { ItemSchema } from "./schemas/item.schema";
import { ItemService } from "./services/item.service";
import { ListService } from "./services/list.service";
import { createDatabase } from "../config/application";
import { ListController } from "./controllers/list.controller";

const { url, connectionName } = createDatabase("hunk-list");

@Module({
  imports: [
    MongooseModule.forRoot(url, {
      connectionName,
    }),
    MongooseModule.forFeature(
      [
        { name: "List", schema: ListSchema },
        { name: "Item", schema: ItemSchema },
      ],
      connectionName,
    ),
  ],
  controllers: [ListController],
  providers: [ListService, ItemService],
})
export class ListModule {}
