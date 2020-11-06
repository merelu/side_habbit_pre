import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { buttonStyle, habitDetailStyle } from "../../styles";
import Calendar from "./Calendar";
interface HabitDetailProps {}
function HabitDetail({}: HabitDetailProps) {
  const classes = {
    detail: habitDetailStyle(),
    button: buttonStyle(),
  };
  return (
    <Container maxWidth="lg" className={classes.detail.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <Calendar />
        </Grid>
      </Grid>
    </Container>
  );
}
export default HabitDetail;
