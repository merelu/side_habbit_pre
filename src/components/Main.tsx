import React, { FC } from "react";
import Contents from "./Contents";
import Generate_Calendar from "./Generate_Calendar";

const Main: FC = () => {
  return (
    <div className="main_grid">
      <Generate_Calendar />
      <Contents />
    </div>
  );
};

export default Main;
