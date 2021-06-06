import { AxiosError } from "axios";
import { User } from "../../services";

export const REGISTER_REQUEST = "USER_REGISTER_REQUEST" as const;
export const REGISTER_SUCCESS = "USER_REGISTER_SUCCESS" as const;
export const REGISTER_FAILURE = "USER_REGISTER_FAILURE" as const;
export const REGISTER_RESET = "USER_REGISTER_RESET" as const;

export const registerRequest = (user: User) => ({
  type: REGISTER_REQUEST,
  payload: { ...user },
});
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});
export const registerFailure = (e: AxiosError) => ({
  type: REGISTER_FAILURE,
  error: true,
  payload: e,
});
export const registerReset = () => ({
  type: REGISTER_RESET,
});
