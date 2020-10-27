import React from "react";
import HabitList from "./HabitList";
import { RootState } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { paperStyle } from "../../styles";
import Intro from "./Intro";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { clear } from "../../store/actions";

//alert override snackbar로 사용하기위해 옵션 줌
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function HabitBody() {
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  const style = paperStyle();
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
    <div className={style.background}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.body}>{loggedIn ? <HabitList /> : <Intro />}</div>
      <Snackbar open={sbOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert_type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default HabitBody;
