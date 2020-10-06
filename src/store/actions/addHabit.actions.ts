import { AxiosError } from "axios";
import { AddHabitInputsType } from "../types";

export const ADDHABIT_REQUEST = "ADDHABIT_REQUEST" as const;
export const ADDHABIT_SUCCESS = "ADDHABIT_SUCCESS" as const;
export const ADDHABIT_FAILURE = "ADDHABIT_FAILURE" as const;

export const addHabitRequest = (inputs: AddHabitInputsType) => ({
  type: ADDHABIT_REQUEST,
  payload: {
    ...inputs,
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
