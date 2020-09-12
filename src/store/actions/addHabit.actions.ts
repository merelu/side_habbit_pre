import { AxiosError } from "axios";
import { AddHabitInputs } from "../types";

export const ADDHABIT_REQUEST = "ADDHABIT_REQUEST" as const;
export const ADDHABIT_SUCCESS = "ADDHABIT_SUCCESS" as const;
export const ADDHABIT_FAILURE = "ADDHABIT_FAILURE" as const;

//임시 습관 생성할시 새로고침하면 에러발생 이것때문
let nextId = 1;

export const addHabitRequest = (
  habit: AddHabitInputs,
  username: string,
  startDate: Date
) => ({
  type: ADDHABIT_REQUEST,
  payload: {
    ...habit,
    username: username,
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
