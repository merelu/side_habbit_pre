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
      className={`${classes.body.detail_root} ${classes.body.detail_active}`}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={7}>
          <Calendar />
        </Grid>
      </Grid>
    </Container>
  );
}
export default HabitDetail;
