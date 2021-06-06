import { Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { generateCalendar, setFixNum } from "../../services/calendar.api";
import { RootState } from "../../store/reducers";
import { calendarStyle } from "../../styles";

const month: string[] = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayName: string[] = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

function Calendar() {
  const classes = calendarStyle();
  const [_date, setDate] = useState<Date>(new Date());
  let dateList = generateCalendar(_date);
  const { selectedIndex, habits } = useSelector(
    (state: RootState) => state.habitsReducer
  );

  const writeHabit_calendar = (cDate: Date, idx: number) => {
    let sDate = new Date(habits[selectedIndex].start_date);
    let eDate = new Date(habits[selectedIndex].end_date);
    let startDate = new Date(cDate.getFullYear(), cDate.getMonth(), 1).getDay();
    if (
      sDate.getFullYear() === cDate.getFullYear() &&
      sDate.getMonth() === cDate.getMonth()
    ) {
      if (
        idx + 1 >= sDate.getDate() &&
        habits[selectedIndex].check_day_of_week[idx % 7] === true
      ) {
        return true;
      } else {
        return false;
      }
    } else if (
      eDate.getFullYear() === cDate.getFullYear() &&
      eDate.getMonth() === cDate.getMonth()
    ) {
      if (
        idx + 1 <= eDate.getDate() + startDate &&
        habits[selectedIndex].check_day_of_week[idx % 7] === true
      ) {
        console.log("eDate", idx);
        return true;
      } else {
        return false;
      }
    } else if (
      `${cDate.getFullYear()}${setFixNum(cDate.getMonth())}` >
        `${sDate.getFullYear()}${setFixNum(sDate.getMonth())}` &&
      `${cDate.getFullYear()}${setFixNum(cDate.getMonth())}` <
        `${eDate.getFullYear()}${setFixNum(eDate.getMonth())}`
    ) {
      if (habits[selectedIndex].check_day_of_week[idx % 7] === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.info}>
        <Button
          onClick={function () {
            setDate(new Date(_date.getFullYear(), _date.getMonth() - 1));
          }}
        >
          &#10094;
        </Button>
        <Typography align="center" variant="h4">
          {month[_date.getMonth()]}
          <div>{_date.getFullYear()}</div>
        </Typography>
        <Button
          onClick={function () {
            setDate(new Date(_date.getFullYear(), _date.getMonth() + 1));
          }}
        >
          &#10095;
        </Button>
      </Grid>
      <Grid container className={classes.dayName_container}>
        {dayName.map((value, idx) => (
          <Grid item key={value} className={classes.dayName}>
            <Typography
              align="center"
              variant="h6"
              className={`${classes.dayName_text} ${
                idx === 0 && classes.dayName_sun
              }`}
            >
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container className={classes.date_container}>
        {dateList.map((v, idx) =>
          v.status ? (
            <Grid
              item
              key={v.key}
              className={`${classes.date_Item} ${
                idx % 7 === 0 && classes.dayName_sun
              }`}
            >
              <div
                className={`${classes.item_border} ${
                  habits[selectedIndex] &&
                  writeHabit_calendar(_date, idx) &&
                  classes.item_active
                }`}
              >
                <div className={classes.item_text}>
                  {v.date && v.date.getDate()}
                </div>
              </div>
            </Grid>
          ) : (
            <Grid item key={v.key} className={classes.date_Item}></Grid>
          )
        )}
      </Grid>
    </Paper>
  );
}

export default Calendar;
