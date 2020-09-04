import * as actions from "../actions/callHabit.actions";
import { Habit } from "../../services/api";

export type CallHabitAction =
  | ReturnType<typeof actions.callHabitRequest>
  | ReturnType<typeof actions.callHabitSuccess>
  | ReturnType<typeof actions.callHabitFailure>;

export type CallHabitState = {
  loading: boolean;
  error: Error | null;
  habits?: Habit[];
};
