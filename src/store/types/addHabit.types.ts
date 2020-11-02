import * as actions from "../actions/addHabit.actions";

export type AddHabitAction =
  | ReturnType<typeof actions.addHabitRequest>
  | ReturnType<typeof actions.addHabitSuccess>
  | ReturnType<typeof actions.addHabitFailure>
  | ReturnType<typeof actions.addHabitReset>;

export type AddHabitState = {
  loading?: boolean;
  error?: Error | null;
};

export type AddHabitInputsType = {
  name: string;
  period: number;
  color: string;
  checkedDayOfWeek: boolean[];
};
