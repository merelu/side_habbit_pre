import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { paperStyle } from "../../styles/styles";
import HabitList from "./HabitList";

const useStyles = makeStyles(paperStyle);
function HabitMain() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <HabitList />
        </Paper>
      </main>
    </>
  );
}

export default HabitMain;
