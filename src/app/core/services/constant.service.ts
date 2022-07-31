import { InjectionToken } from "@angular/core";
import { ConstantLiteral } from "../models/config";

export const ConstantLiteralToken = new InjectionToken<ConstantLiteral>('Constant_Literal');

export const constLit: ConstantLiteral = {
  app: 'Todo APP',
  ver: '1.01',
  API_URL: 'https://www.todo.com',
  applicationid: 3546,
  clientid: '38494b04-ae64-4d5a-9727-d80b26a6837c',
  environment: false
}
