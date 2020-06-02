import React from "react";
import "./App.css";
import "./temp/callenderStyle.css"
import "./temp/style.css"
import Subject from "./components/Subject"
import Calendar from "./components/Calendar"
import HabitList from "./components/HabitList"
import { History } from "history";

interface AppProps {
  history?: History;
}

const App = ({ history }: AppProps) => {
  return (
    <div className="App">
      <Subject></Subject>
      <div className="main">
        <Calendar></Calendar>
        <HabitList></HabitList>
      </div>
    </div>
  );
};

export default App;
