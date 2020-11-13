import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { buttonStyle, habitBodyStyle } from "../../styles";
import Calendar from "./Calendar";
interface HabitDetailProps {}
function HabitDetail({}: HabitDetailProps) {
  const classes = {
    body: habitBodyStyle(),
    button: buttonStyle(),
  };
  return (
    <Container
      className={`${classes.body.container} ${classes.body.detailActive}`}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <Calendar />
        </Grid>
      </Grid>
    </Container>
  );
}
export default HabitDetail;
