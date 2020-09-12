import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputAdornment,
  MenuItem,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addHabitRequest } from "../../store/actions/addHabit.actions";
import { paperStyle } from "../../styles/styles";
import { RootState } from "../../store/reducers";
import { AddHabitInputs } from "../../store/types";
import { History } from "history";

type AddHabitProps = {
  history: History;
};
function AddHabit({ history }: AddHabitProps) {
  const useStyles = makeStyles(paperStyle);
  const classes = useStyles();
  const [inputs, setInputs] = useState<AddHabitInputs>({
    habbit_Name: "",
    period: 0,
    habbit_color: "",
    checkedDayOfWeek: [false, false, false, false, false, false, false],
  });
  const { loading } = useSelector((state: RootState) => state.addHabitReducer);
  const { loggedIn, username } = useSelector(
    (state: RootState) => state.loginReducer
  );
  const dayOfWeek = [
    { id: 0, value: "Sun" },
    { id: 1, value: "Mon" },
    { id: 2, value: "Tue" },
    { id: 3, value: "Wed" },
    { id: 4, value: "Thu" },
    { id: 5, value: "Fri" },
    { id: 6, value: "Sat" },
  ];
  const colors = [
    {
      value: "blue",
    },
    {
      value: "red",
    },
  ];
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [id]: type === "number" ? parseInt(value) : value,
    }));
  };
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({ ...inputs, habbit_color: e.target.value }));
  };
  const handlCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      checkedDayOfWeek: inputs.checkedDayOfWeek.map((x, index) =>
        index === Number(e.target.name) ? e.target.checked : x
      ),
    }));
  };
  //작성해야할것
  const handleSubmit = () => {
    if (loggedIn && username) {
      let startDate = new Date();
      dispatch(addHabitRequest(inputs, username, startDate));
      history.push("/");
    } else {
      alert("로그인 해주세요");
    }
  };

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={5}>
          <Typography variant="h4" gutterBottom>
            Create habit
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                required
                id="habbit_Name"
                label="Habbit name"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                required
                id="period"
                label="How long?"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">days</InputAdornment>
                  ),
                }}
                type="number"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                select
                label="color"
                value={inputs.habbit_color}
                helperText="Please select color"
                variant="outlined"
                required
                onChange={handleColor}
              >
                {colors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Repeat weekly</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormGroup aria-label="position" row>
                {dayOfWeek.map((day) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputs.checkedDayOfWeek[day.id]}
                        name={day.id.toString()}
                        onChange={handlCheckbox}
                      />
                    }
                    label={day.value}
                    key={day.id}
                    labelPlacement="top"
                  />
                ))}
              </FormGroup>
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            {loading && <CircularProgress size={30} />}
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleSubmit}
              color="primary"
            >
              SAVE
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
}

export default AddHabit;
