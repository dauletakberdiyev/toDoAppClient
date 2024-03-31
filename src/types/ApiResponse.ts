import { BaseResponse } from "./BaseResponse";

export type APIResponse = [null, BaseResponse] | [Error];