import { AxiosError } from "axios";

export const REMOVE_HABIT_REQUEST = "REMOVE_HABIT_REQUEST" as const;
export const REMOVE_HABIT_SUCCESS = "REMOVE_HABIT_SUCCESS" as const;
export const REMOVE_HABIT_FAILURE = "REMOVE_HABIT_FAILURE" as const;

export const removeHabitRequest = (id: number) => ({
  type: REMOVE_HABIT_REQUEST,
  payload: id,
});

export const removeHabitSuccess = () => ({
  type: REMOVE_HABIT_SUCCESS,
});

export const removeHabitFailure = (e: AxiosError) => ({
  type: REMOVE_HABIT_FAILURE,
  error: true,
  payload: e,
});
