import React, { useState } from "react";
import { RootState } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Intro from "./Intro";
import { Divider, Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { clear } from "../../store/actions";
import HabitList from "./HabitList";
import { habitBodyStyle } from "../../styles";
import HabitDetail from "./HabitDetail";

//alert override snackbar로 사용하기위해 옵션 줌
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function HabitBody() {
  const classes = habitBodyStyle();
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);

  const { sbOpen, message, alert_type } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const [detailed, setDetailed] = useState(false);
  const [push, setPush] = useState(true);
  const toggleDetailed = (value: boolean) => {
    setDetailed(value);
  };
  const dispatch = useDispatch();
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clear());
  };
  const handlePush = (value: boolean) => {
    setPush(value);
  };
  return (
    <React.Fragment>
      <Header />
      {loggedIn ? (
        <React.Fragment>
          <div className={classes.appBarSpacer} />
          <main className={classes.root}>
            {push && (
              <div
                className={`${classes.flex} ${
                  detailed ? classes.disable : classes.active
                }`}
                onAnimationEnd={() => {
                  if (detailed) {
                    handlePush(false);
                  }
                }}
              />
            )}
            <HabitList
              detailed={detailed}
              toggleDetailed={toggleDetailed}
              handlePush={handlePush}
            />
            {!detailed && (
              <div
                className={`${classes.flex} ${
                  detailed ? classes.disable : classes.active
                }`}
              />
            )}
            {detailed ? (
              <React.Fragment>
                <Divider orientation="vertical" flexItem />
                <HabitDetail />
              </React.Fragment>
            ) : (
              <React.Fragment />
            )}
          </main>
        </React.Fragment>
      ) : (
        <Intro />
      )}
      <Snackbar open={sbOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert_type}>
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default HabitBody;
