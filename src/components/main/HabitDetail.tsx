import React, { useEffect } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { buttonStyle, habitBodyStyle } from "../../styles";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabitRequest } from "../../store/actions";
import { RootState } from "../../store/reducers";

interface HabitDetailProps {
  handleDetailed: (value: boolean) => void;
  handlePush: (value: boolean) => void;
}
function HabitDetail({ handleDetailed, handlePush }: HabitDetailProps) {
  const classes = {
    body: habitBodyStyle(),
    button: buttonStyle(),
  };
  const { habits, selectedIndex, loading } = useSelector(
    (state: RootState) => state.habitsReducer
  );

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteHabitRequest(habits[selectedIndex].pk));
  };
  useEffect(() => {
    if (loading === false) {
      handleDetailed(false);
      handlePush(true);
    }
  });
  return (
    <Container
      className={`${classes.body.detail_root} ${classes.body.detail_active}`}
    >
      <Grid container>
        <Grid item xs={12}>
          <Calendar />
        </Grid>
        <Button
          className={classes.button.button}
          variant="contained"
          color="primary"
        >
          Revise
        </Button>
        <Button
          className={classes.button.button}
          onClick={handleDelete}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </Grid>
    </Container>
  );
}
export default HabitDetail;
