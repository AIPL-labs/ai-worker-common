import type { UserLoginRequest } from "./UserLoginRequest";

export type UserCreateRequest = UserLoginRequest & {
  accessToken: string;
};
