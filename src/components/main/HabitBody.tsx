import React from "react";
import { Typography } from "@material-ui/core";
import HabitList from "./HabitList";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";
import Header from "./Header";
import { History } from "history";
import { paperStyle } from "../../styles";

interface HabitBodyProps {
  history: History;
}

function HabitBody({ history }: HabitBodyProps) {
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  const style = paperStyle();
  return (
    <div className={style.background}>
      <div className={style.body}>
        <Header history={history} />
        {loggedIn ? <HabitList /> : <Typography>로그인해주세요</Typography>}
      </div>
    </div>
  );
}

export default HabitBody;
