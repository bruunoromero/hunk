import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { ListSchema } from "./list.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'List', schema: ListSchema }])],
})
export class SchemasModule {}
