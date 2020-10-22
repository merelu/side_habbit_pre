import React from "react";
import HabitList from "./HabitList";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";
import Header from "./Header";
import { History } from "history";
import { paperStyle } from "../../styles";
import Intro from "./Intro";

interface HabitBodyProps {
  history: History;
}

function HabitBody({ history }: HabitBodyProps) {
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  const style = paperStyle();
  return (
    <div className={style.background}>
      <div className={style.header}>
        <Header history={history} />
      </div>
      <div className={style.body}>{loggedIn ? <HabitList /> : <Intro />}</div>
    </div>
  );
}

export default HabitBody;
