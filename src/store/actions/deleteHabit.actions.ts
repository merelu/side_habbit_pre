import { AxiosError } from "axios";

export const DELETEHABIT_REQUEST = "DELETEHABIT_REQUEST" as const;
export const DELETEHABIT_SUCCESS = "DELETEHABIT_SUCCESS" as const;
export const DELETEHABIT_FAILURE = "DELETEHABIT_FAILURE" as const;

export const deleteHabitRequest = (id: number) => ({
  type: DELETEHABIT_REQUEST,
  payload: id,
});

export const deleteHabitSuccess = () => ({
  type: DELETEHABIT_SUCCESS,
});

export const deleteHabitFailure = (e: AxiosError) => ({
  type: DELETEHABIT_FAILURE,
  error: true,
  payload: e,
});
