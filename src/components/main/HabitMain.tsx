import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { paperStyle } from "../../styles/styles";
import HabitList from "./HabitList";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";

const useStyles = makeStyles(paperStyle);
function HabitMain() {
  const classes = useStyles();
  const { loggedIn, username } = useSelector(
    (state: RootState) => state.loginReducer
  );
  return (
    <>
      {loggedIn && username ? (
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <HabitList username={username} />
          </Paper>
        </main>
      ) : (
        <>
          <div>로그인해주세요</div>
          <div>로그인안됨 링크들가서 깔고 터미널에 입력</div>
          <p>$json-server --watch db.json --port 8000</p>
          <a href="https://www.npmjs.com/package/json-server">링크</a>
        </>
      )}
    </>
  );
}

export default HabitMain;
