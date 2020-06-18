import React, { useState } from "react";
import "../css/Calendar.css";

const Calendar: React.FC = () => {
  let [_date, setDate] = useState<Date>(new Date());
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

  let generatorCalendar = () => {
    const firstdayName: number = new Date(
      _date.getFullYear(),
      _date.getMonth(),
      1
    ).getDay();

    const lastday: number = new Date(
      _date.getFullYear(),
      _date.getMonth() + 1,
      0
    ).getDate();

    const preLastday: number = new Date(
      _date.getFullYear(),
      _date.getMonth(),
      0
    ).getDate();

    let startDayCount: number = 1;
    let lastDayCount: number = 1;
    let calendarList = [];
    let calkey = 0;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstdayName) {
          calendarList.push([
            ,
            <div className="dateBox" key={calkey++}>
              <span className="text">
                {preLastday - (firstdayName - 1) + j}
              </span>
              <span
                id={
                  _date.getFullYear().toString() +
                  setFixNum(_date.getMonth()) +
                  setFixNum(preLastday - (firstdayName - 1) + j)
                }
              ></span>
            </div>,
          ]);
        } else if (i === 0 && j === firstdayName) {
          calendarList.push(
            <div className="dateBox" key={calkey++}>
              <span className="text">{startDayCount++}</span>
              <span
                id={
                  _date.getFullYear().toString() +
                  setFixNum(_date.getMonth() + 1) +
                  setFixNum(startDayCount)
                }
              ></span>
            </div>
          );
        } else if (i === 0 && j > firstdayName) {
          calendarList.push(
            <div className="dateBox" key={calkey++}>
              <span className="text">{startDayCount++}</span>
              <span
                id={
                  _date.getFullYear().toString() +
                  setFixNum(_date.getMonth() + 1) +
                  setFixNum(startDayCount)
                }
              ></span>
            </div>
          );
        } else if (i > 0 && startDayCount <= lastday) {
          calendarList.push(
            <div className="dateBox" key={calkey++}>
              <span className="text">{startDayCount++}</span>
              <span
                id={
                  _date.getFullYear().toString() +
                  setFixNum(_date.getMonth() + 1) +
                  setFixNum(startDayCount)
                }
              ></span>
            </div>
          );
        } else if (startDayCount > lastday) {
          calendarList.push(
            <div className="dateBox" key={calkey++}>
              <span className="text">{lastDayCount++}</span>
              <span
                id={
                  _date.getFullYear().toString() +
                  setFixNum(_date.getMonth() + 2) +
                  setFixNum(lastDayCount)
                }
              ></span>
            </div>
          );
        }
      }
    }
    return calendarList;
  };
  const setFixNum = (num: number): string => {
    let fixNum: string = "";
    if (num < 10) {
      fixNum = "0" + num.toString();
    } else {
      fixNum = num.toString();
    }
    return fixNum;
  };
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

        {generatorCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
