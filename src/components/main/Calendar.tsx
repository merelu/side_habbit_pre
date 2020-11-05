import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { calendarStyle } from "../../styles";
import GenerateCalendar from "./GenerateCalendar";

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

  return (
    <Paper className={classes.root}>
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
      <Grid container spacing={3}>
        {dayName.map((value) => (
          <Grid item xs>
            <Box>
              <Typography align="center" variant="h6">
                {value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <GenerateCalendar date={_date} />
      </Grid>
    </Paper>
  );
}

export default Calendar;
