import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { paperStyle } from "../../styles/styles";
import HabitList from "./HabitList";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";

const useStyles = makeStyles(paperStyle);
function HabitMain() {
  const classes = useStyles();
  const { loggedIn } = useSelector((state: RootState) => state.loginReducer);
  return (
    <>
      {loggedIn ? (
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <HabitList />
          </Paper>
        </main>
      ) : (
        <>
          <div>로그인해주세요</div>
        </>
      )}
    </>
  );
}

export default HabitMain;
