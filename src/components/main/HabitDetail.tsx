import React from "react";
import { Container } from "@material-ui/core";
import { habitDetailStyle } from "../../styles";

function HabitDetail() {
  const classes = habitDetailStyle();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <div></div>
    </Container>
  );
}
export default HabitDetail;
