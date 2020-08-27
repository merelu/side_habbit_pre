import { AxiosError } from "axios";
import { User } from "../../services/api";

export const AUTH_REGISTER_REQUEST = "AUTH_REGISTER_REQUEST" as const;
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS" as const;
export const AUTH_REGISTER_FAILURE = "AUTH_REGISTER_FAILURE" as const;

let nextId = 3;

export const registerRequest = (user: User) => ({
  type: AUTH_REGISTER_REQUEST,
  payload: { ...user, id: nextId++ },
});
export const registerSuccess = () => ({ type: AUTH_REGISTER_SUCCESS });
export const registerFailure = (e: AxiosError) => ({
  type: AUTH_REGISTER_FAILURE,
  error: true,
  payload: e,
});
