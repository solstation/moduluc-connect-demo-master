import { AxiosRequestHeaders } from "axios";

export type HttpMethods =
  | "get"
  | "post"
  | "patch"
  | "delete"
  | "put"
  | "head"
  | "options";
export interface useHttpServiceConfig {
  method: HttpMethods;
  body?: any;
  headers?: AxiosRequestHeaders;
  onDemand?: boolean;
}
