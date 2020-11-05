import { AxiosError } from "axios";
import { Habit } from "../../services";

export const TODAY_HABITS_REQUEST = "USER_TODAY_HABITS_REQUEST" as const;
export const TODAY_HABITS_SUCCESS = "USER_TODAY_HABITS_SUCCESS" as const;
export const TODAY_HABITS_FAILURE = "USER_TODAY_HABITS_FAILURE" as const;

export const todayHabitsRequest = () => ({
  type: TODAY_HABITS_REQUEST,
});
export const todayHabitsSuccess = (habits: Habit[]) => ({
  type: TODAY_HABITS_SUCCESS,
  payload: habits,
});
export const todayHabitsFailure = (e: AxiosError) => ({
  type: TODAY_HABITS_FAILURE,
  error: true,
  payload: e,
});
