import React from "react";
import { Container, Grid } from "@material-ui/core";
import { buttonStyle, habitBodyStyle } from "../../styles";
import Calendar from "./Calendar";

function HabitDetail() {
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
