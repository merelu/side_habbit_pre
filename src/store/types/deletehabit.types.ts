import {
  deleteHabitRequest,
  deleteHabitSuccess,
  deleteHabitFailure,
} from "../actions";

export type DeleteHabitAction =
  | ReturnType<typeof deleteHabitRequest>
  | ReturnType<typeof deleteHabitSuccess>
  | ReturnType<typeof deleteHabitFailure>;

export type DeleteHabitState = {
  loading: boolean;
  error: Error | null;
};
