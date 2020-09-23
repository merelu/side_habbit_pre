import { AxiosError } from "axios";
import { Habit } from "../../services/api";

export const REMOVE_HABIT_REQUEST = "REMOVE_HABIT_REQUEST" as const;
export const REMOVE_HABIT_SUCCESS = "REMOVE_HABIT_SUCCESS" as const;
export const REMOVE_HABIT_FAILURE = "REMOVE_HABIT_FAILURE" as const;

export const removeHabitRequest = (username: string, id: number) => ({
  type: REMOVE_HABIT_REQUEST,
  payload: {
    username,
    id,
  },
});

export const removeHabitSuccess = (habits: Habit) => ({
  type: REMOVE_HABIT_SUCCESS,
  payload: habits,
});

export const removeHabitFailure = (e: AxiosError) => ({
  type: REMOVE_HABIT_FAILURE,
  error: true,
  payload: e,
});
