import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { generateCalendar } from "../../services/calendar.api";
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
          <Typography align="center" variant="h6">
            {_date.getFullYear()}
          </Typography>
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
        {dayName.map((value) => (
          <Grid item key={value} className={classes.dayName}>
            <Typography
              align="center"
              variant="h6"
              className={classes.dayName_text}
            >
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container className={classes.date_container}>
        {dateList.map((v) =>
          v.status ? (
            <Grid item key={v.key} className={classes.date_Item}>
              <Typography
                align="center"
                variant="h6"
                className={classes.item_text}
              >
                {v.date && v.date.getDate()}
              </Typography>
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
