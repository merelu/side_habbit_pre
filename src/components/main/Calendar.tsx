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
import CalendarItem from "./CalendarItem";

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
const dayName: string[] = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

function Calendar() {
  const classes = calendarStyle();
  const [_date, setDate] = useState<Date>(new Date());
  let dateList = generateCalendar(_date);
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Box className={classes.info}>
          <Button
            onClick={function () {
              setDate(new Date(_date.getFullYear(), _date.getMonth() - 1));
            }}
          >
            &#10094;
          </Button>
          <Typography align="center" variant="h4">
            {month[_date.getMonth()]} {_date.getFullYear()}
          </Typography>
          <Button
            onClick={function () {
              setDate(new Date(_date.getFullYear(), _date.getMonth() + 1));
            }}
          >
            &#10095;
          </Button>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        {dayName.map((value) => (
          <Grid item key={value} className={classes.item}>
            <Box className={classes.box}>
              <Typography align="center" variant="h6">
                {value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container spacing={2} className={classes.root}>
        {dateList.map((v) =>
          v.status ? (
            <Grid item key={v.key} className={classes.item}>
              <Box className={classes.box}>
                <CalendarItem date={v.date} />
              </Box>
            </Grid>
          ) : (
            <Grid item key={v.key} className={classes.item}>
              <Box className={classes.emptyBox}></Box>
            </Grid>
          )
        )}
      </Grid>
    </Paper>
  );
}

export default Calendar;
