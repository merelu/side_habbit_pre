import { AxiosError } from "axios";
import { Habit } from "../../services/api";

export const CALLHABIT_REQUEST = "CALLHABIT_REQUEST" as const;
export const CALLHABIT_SUCCESS = "CALLHABIT_SUCCESS" as const;
export const CALLHABIT_FAILURE = "CALLHABIT_FAILURE" as const;

export const callHabitRequest = (userId: number, today: Date) => ({
  type: CALLHABIT_REQUEST,
  payload: {
    userId: userId,
    today: today,
  },
});
export const callHabitSuccess = (habits: Habit[]) => ({
  type: CALLHABIT_SUCCESS,
  payload: habits,
});
export const callHabitFailure = (e: AxiosError) => ({
  type: CALLHABIT_FAILURE,
  error: true,
  payload: e,
});
