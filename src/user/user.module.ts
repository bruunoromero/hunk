import { Module, Global } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserSchema } from "./schemas/user.schema";
import { UserService } from "./services/user.service";
import { createDatabase } from "../config/application";
import { UserController } from "./controllers/user.controller";

const { url, connectionName } = createDatabase("hunk-user");

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(url, {
      connectionName,
    }),
    MongooseModule.forFeature(
      [{ name: "User", schema: UserSchema }],
      connectionName,
    ),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
