import { AxiosError } from "axios";
import { Habit } from "../../services";

export const GET_HABITS_REQUEST = "GET_HABITS_REQUEST" as const;
export const GET_HABITS_SUCCESS = "GET_HABITS_SUCCESS" as const;
export const GET_HABITS_FAILURE = "GET_HABITS_FAILURE" as const;

export const getHabitsRequest = () => ({
  type: GET_HABITS_REQUEST,
});
export const getHabitsSuccess = (habits: Habit[]) => ({
  type: GET_HABITS_SUCCESS,
  payload: habits,
});
export const getHabitsFailure = (e: AxiosError) => ({
  type: GET_HABITS_FAILURE,
  error: true,
  payload: e,
});
