import React, { FC } from "react";

type dayProps = {
  key: number;
  date: number;
  id: string;
};

const day: FC<dayProps> = ({ key, date, id }) => {
  return (
    <div className="dateBox" key={key++}>
      <span className="text">{date}</span>
      <span id={id}></span>
    </div>
  );
};

export default day;
