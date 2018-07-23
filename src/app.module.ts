import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { SchemasModule } from "./schemas/schemas.module";
import { ControllersModule } from "./controllers/controllers.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/hunk"),
    SchemasModule,
    ControllersModule,
  ],
})
export class AppModule {}
