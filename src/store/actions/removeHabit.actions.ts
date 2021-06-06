import { AxiosError } from "axios";
import { Habit } from "../../services";

export const DELETE_HABIT_REQUEST = "USER_DELETE_HABIT_REQUEST" as const;
export const DELETE_HABIT_SUCCESS = "USER_DELETE_HABIT_SUCCESS" as const;
export const DELETE_HABIT_FAILURE = "USER_DELETE_HABIT_FAILURE" as const;

export const deleteHabitRequest = (pk: number) => ({
  type: DELETE_HABIT_REQUEST,
  payload: {
    pk,
  },
});

export const deleteHabitSuccess = () => ({
  type: DELETE_HABIT_SUCCESS,
});

export const deleteHabitFailure = (e: AxiosError) => ({
  type: DELETE_HABIT_FAILURE,
  error: true,
  payload: e,
});
