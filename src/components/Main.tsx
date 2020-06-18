import React from "react";
import "../css/Main.css";
import Calendar from "./Calendar";
import HabitList from "./HabitList";

const Main: React.FC = () => {
  return (
    <div className="main_grid">
      <Calendar />
      <HabitList />
    </div>
  );
};

export default Main;
