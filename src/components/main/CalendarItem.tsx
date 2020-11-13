import { Typography } from "@material-ui/core";
import React from "react";
interface CalendarItemProps {
  date: Date | null;
}
function CalendarItem({ date }: CalendarItemProps) {
  return (
    <React.Fragment>
      <Typography align="left" variant="h6">
        {date && date.getDate()}
      </Typography>
    </React.Fragment>
  );
}

export default CalendarItem;
