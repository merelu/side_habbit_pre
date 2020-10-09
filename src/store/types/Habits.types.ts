import { Habit } from "../../services";
import {
  callHabitsRequest,
  callHabitsSuccess,
  callHabitsFailure,
  removeHabitSuccess,
  removeHabitRequest,
  removeHabitFailure,
} from "../actions";

export type HabitsAction =
  | ReturnType<typeof callHabitsRequest>
  | ReturnType<typeof callHabitsSuccess>
  | ReturnType<typeof callHabitsFailure>
  | ReturnType<typeof removeHabitRequest>
  | ReturnType<typeof removeHabitSuccess>
  | ReturnType<typeof removeHabitFailure>;

export type HabitsState = {
  loading?: boolean;
  error?: Error;
  habits?: Habit[];
};
