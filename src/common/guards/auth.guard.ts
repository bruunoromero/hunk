import * as firebaseAdmin from "firebase-admin";
import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization) {
      return false;
    }

    request.user = await firebaseAdmin.auth().verifyIdToken(authorization);

    return true;
  }
}
