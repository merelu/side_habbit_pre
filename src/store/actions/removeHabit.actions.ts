import { AxiosError } from "axios";
import { Habit } from "../../services";

export const REMOVE_HABIT_REQUEST = "USER_REMOVE_HABIT_REQUEST" as const;
export const REMOVE_HABIT_SUCCESS = "USER_REMOVE_HABIT_SUCCESS" as const;
export const REMOVE_HABIT_FAILURE = "USER_REMOVE_HABIT_FAILURE" as const;

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
