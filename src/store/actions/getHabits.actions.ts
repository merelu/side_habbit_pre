import { AxiosError } from "axios";
import { Habit } from "../../services/api";

export const GET_HABITS_REQUEST = "GET_HABITS_REQUEST" as const;
export const GET_HABITS_SUCCESS = "GET_HABITS_SUCCESS" as const;
export const GET_HABITS_FAILURE = "GET_HABITS_FAILURE" as const;

export const getHabitsRequest = (userId: string, today: Date) => ({
  type: GET_HABITS_REQUEST,
  payload: {
    userId: parseInt(userId),
    today: today,
  },
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
