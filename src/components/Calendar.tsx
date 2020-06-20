import React, { useState, FC } from "react";
import "../css/Calendar.css";
import GenerateCalendar from "./GenerateCalendar";

const Calendar: FC = () => {
  const [_date, setDate] = useState<Date>(new Date());
  const month: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="callender">
      <div className="month">
        <ul>
          <li
            className="prev"
            onClick={function () {
              setDate(new Date(_date.getFullYear(), _date.getMonth() - 1));
            }}
          >
            &#10094;
          </li>
          <li
            className="next"
            onClick={function () {
              setDate(new Date(_date.getFullYear(), _date.getMonth() + 1));
            }}
          >
            &#10095;
          </li>
          <li>
            <span>{month[_date.getMonth()]}</span>
            <br />
            <span>{_date.getFullYear()}</span>
          </li>
        </ul>
      </div>

      <div className="calenderBody">
        <div className="dayBox">
          <span className="text">Sun</span>
        </div>
        <div className="dayBox">
          <span className="text">Mon</span>
        </div>
        <div className="dayBox">
          <span className="text">Tue</span>
        </div>
        <div className="dayBox">
          <span className="text">Wed</span>
        </div>
        <div className="dayBox">
          <span className="text">Thr</span>
        </div>
        <div className="dayBox">
          <span className="text">Fri</span>
        </div>
        <div className="dayBox">
          <span className="text">Sat</span>
        </div>

        <GenerateCalendar date={_date} />
      </div>
    </div>
  );
};

export default Calendar;
