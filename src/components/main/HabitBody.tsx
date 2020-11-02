import React from "react";
import { RootState } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Intro from "./Intro";
import { Container, Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { clear } from "../../store/actions";
import HabitList from "./HabitList";
import { habitDetailStyle } from "../../styles";
import HabitDetail from "./HabitDetail";

//alert override snackbar로 사용하기위해 옵션 줌
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function HabitBody() {
  const classes = habitDetailStyle();
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  const { sbOpen, message, alert_type } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const dispatch = useDispatch();
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clear());
  };
  return (
    <div className="habit-body">
      <Header />
      {loggedIn ? (
        <main>
          <HabitList />
          <HabitDetail />
        </main>
      ) : (
        <Intro />
      )}
      <Snackbar open={sbOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert_type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default HabitBody;
