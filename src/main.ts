import { NestFactory } from "@nestjs/core";
import * as firebaseAdmin from "firebase-admin";
import { AuthGuard } from "./common/guards/auth.guard";

const serviceAccount = require("../serviceAccountKey.json");

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  firebaseAdmin.initializeApp({
    databaseURL: "https://hunk-e42f0.firebaseio.com",
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });

  app.useGlobalGuards(new AuthGuard());

  await app.listen(3000);
}
bootstrap();
