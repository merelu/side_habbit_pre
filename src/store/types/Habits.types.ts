import { Habit } from "../../services";
import {
  getHabitsRequest,
  getHabitsSuccess,
  getHabitsFailure,
  removeHabitSuccess,
  removeHabitRequest,
  removeHabitFailure,
} from "../actions";

export type HabitsAction =
  | ReturnType<typeof getHabitsRequest>
  | ReturnType<typeof getHabitsSuccess>
  | ReturnType<typeof getHabitsFailure>
  | ReturnType<typeof removeHabitRequest>
  | ReturnType<typeof removeHabitSuccess>
  | ReturnType<typeof removeHabitFailure>;

export type HabitsState = {
  loading?: boolean;
  error?: Error;
  habits?: Habit[];
};
