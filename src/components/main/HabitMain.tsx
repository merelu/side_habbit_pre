import React from "react";
import { Paper, Typography } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { backgroundStyle, paperStyle } from "../../styles/styles";
import HabitList from "./HabitList";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";

function HabitMain() {
  const style = { paper: paperStyle(), background: backgroundStyle() };
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  return (
    <>
      {loggedIn ? (
        <main className={style.background.background}>
          <div className={style.paper.layout}>
            <Paper className={style.paper.paper}>
              <HabitList />
            </Paper>
          </div>
        </main>
      ) : (
        <>
          <Typography>로그인해주세요</Typography>
        </>
      )}
    </>
  );
}

export default HabitMain;
