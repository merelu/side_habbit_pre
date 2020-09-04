import React from "react";
import { List, makeStyles } from "@material-ui/core";
import { listStyle } from "../../styles/styles";

const useStyles = makeStyles(listStyle);
function HabitList() {
  const classes = useStyles();
  return <List className={classes.list}></List>;
}
export default HabitList;
