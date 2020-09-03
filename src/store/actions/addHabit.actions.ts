import { AxiosError } from "axios";
import { AddHabitInputs } from "../../components/addHabit/AddHabit";

export const ADDHABIT_REQUEST = "ADDHABIT_REQUEST" as const;
export const ADDHABIT_SUCCESS = "ADDHABIT_SUCCESS" as const;
export const ADDHABIT_FAILURE = "ADDHABIT_FAILURE" as const;

let nextId = 1;

export const addHabitRequest = (
  habit: AddHabitInputs,
  userId: number,
  startDate: Date
) => ({
  type: ADDHABIT_REQUEST,
  payload: {
    ...habit,
    userId: userId,
    id: nextId++,
    startDate: startDate,
  },
});
export const addHabitSuccess = () => ({
  type: ADDHABIT_SUCCESS,
});
export const addHabitFailure = (e: AxiosError) => ({
  type: ADDHABIT_FAILURE,
  error: true,
  payload: e,
});
