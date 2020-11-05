import React from "react";
interface GenerateCalendarProps {
  date: Date;
}

const setFixNum = (num: number): string => {
  let fixNum: string = "";
  if (num < 10) {
    fixNum = "0" + num.toString();
  } else {
    fixNum = num.toString();
  }
  return fixNum;
};

function GenerateCalendar({ date }: GenerateCalendarProps) {
  //Sunday - Saturday : 0 - 6
  const firstday: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  //이달 말일
  const lastdate: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  //지난달 말일
  const preLastdate: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let startDateCount: number = 1;
  let lastDateCount: number = 1;
  let calendarList = [];
  let calkey = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstday) {
        calendarList.push(<div className="dateBox" key={calkey++}></div>);
      } else if (i === 0 && j === firstday) {
        calendarList.push(
          <div className="dateBox" key={calkey++}>
            <span className="text">{startDateCount++}</span>
            <span
              id={
                date.getFullYear().toString() +
                setFixNum(date.getMonth() + 1) +
                setFixNum(startDateCount)
              }
            ></span>
          </div>
        );
      } else if (i === 0 && j > firstday) {
        calendarList.push(
          <div className="dateBox" key={calkey++}>
            <span className="text">{startDateCount++}</span>
            <span
              id={
                date.getFullYear().toString() +
                setFixNum(date.getMonth() + 1) +
                setFixNum(startDateCount)
              }
            ></span>
          </div>
        );
      } else if (i > 0 && startDateCount <= lastdate) {
        calendarList.push(
          <div className="dateBox" key={calkey++}>
            <span className="text">{startDateCount++}</span>
            <span
              id={
                date.getFullYear().toString() +
                setFixNum(date.getMonth() + 1) +
                setFixNum(startDateCount)
              }
            ></span>
          </div>
        );
      } else if (startDateCount > lastdate) {
        calendarList.push(
          <div className="dateBox" key={calkey++}>
            <span className="text">{lastDateCount++}</span>
            <span
              id={
                date.getFullYear().toString() +
                setFixNum(date.getMonth() + 2) +
                setFixNum(lastDateCount)
              }
            ></span>
          </div>
        );
      }
    }
  }
  return <div className="date">{calendarList}</div>;
}

export default GenerateCalendar;
