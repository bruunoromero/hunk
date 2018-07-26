import { createParamDecorator } from "@nestjs/common";

export const BodyWithCreator = createParamDecorator((data, req) => {
  const body = data ? req.body[data] : req.body;
  body.creator = req.user.uid;

  return body;
});
