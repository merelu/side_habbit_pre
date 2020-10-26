import { AxiosError } from "axios";
import { Habit } from "../../services";

export const CALL_HABITS_REQUEST = "USER_CALL_HABITS_REQUEST" as const;
export const CALL_HABITS_SUCCESS = "USER_CALL_HABITS_SUCCESS" as const;
export const CALL_HABITS_FAILURE = "USER_CALL_HABITS_FAILURE" as const;

export const callHabitsRequest = () => ({
  type: CALL_HABITS_REQUEST,
});
export const callHabitsSuccess = (habits: Habit[]) => ({
  type: CALL_HABITS_SUCCESS,
  payload: habits,
});
export const callHabitsFailure = (e: AxiosError) => ({
  type: CALL_HABITS_FAILURE,
  error: true,
  payload: e,
});
