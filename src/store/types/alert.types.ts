import { Color } from "@material-ui/lab/Alert";
import * as actions from "../actions";

export type alertAction =
  | ReturnType<typeof actions.nomal_success>
  | ReturnType<typeof actions.nomal_error>
  | ReturnType<typeof actions.sb_success>
  | ReturnType<typeof actions.sb_error>
  | ReturnType<typeof actions.clear>;

export type alertState = {
  message?: string;
  alert_type?: Color;
  sbOpen?: boolean;
};
