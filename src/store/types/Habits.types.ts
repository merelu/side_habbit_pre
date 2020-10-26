import { Habit } from "../../services";
import * as actions from "../actions";

export type HabitsAction =
  | ReturnType<typeof actions.callHabitsRequest>
  | ReturnType<typeof actions.callHabitsSuccess>
  | ReturnType<typeof actions.callHabitsFailure>
  | ReturnType<typeof actions.removeHabitRequest>
  | ReturnType<typeof actions.removeHabitSuccess>
  | ReturnType<typeof actions.removeHabitFailure>;

export type HabitsState = {
  loading?: boolean;
  error?: Error;
  habits?: Habit[];
};
