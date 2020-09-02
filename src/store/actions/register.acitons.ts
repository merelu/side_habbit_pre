import { AxiosError } from "axios";
import { User } from "../../services/api";

export const REGISTER_REQUEST = "REGISTER_REQUEST" as const;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS" as const;
export const REGISTER_FAILURE = "REGISTER_FAILURE" as const;

let nextId = 3;

export const registerRequest = (user: User) => ({
  type: REGISTER_REQUEST,
  payload: { ...user, id: nextId++ },
});
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});
export const registerFailure = (e: AxiosError) => ({
  type: REGISTER_FAILURE,
  error: true,
  payload: e,
});
