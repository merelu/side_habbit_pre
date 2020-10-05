import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputAdornment,
  MenuItem,
  Button,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addHabitRequest } from "../../store/actions/addHabit.actions";
import { paperStyle } from "../../styles/styles";
import { RootState } from "../../store/reducers";
import { AddHabitInputsType } from "../../store/types";

type AddHabitProps = {
  dialogClose: () => void;
};

function AddHabit({ dialogClose }: AddHabitProps) {
  const useStyles = makeStyles(paperStyle);
  const classes = useStyles();
  const [inputs, setInputs] = useState<AddHabitInputsType>({
    habit_Name: "",
    period: 0,
    color: "",
    checkedDayOfWeek: [false, false, false, false, false, false, false],
  });
  const { loggedIn } = useSelector((state: RootState) => state.loginReducer);
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
    setInputs((inputs) => ({ ...inputs, color: e.target.value }));
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
    //dispatch(addHabitRequest(inputs, token, startDate));
  };

  return (
    <>
      <DialogContent style={{ overflow: "hidden" }}>
        <Typography variant="h4" gutterBottom>
          Create habit
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              required
              id="habit_Name"
              label="Habit name"
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
              value={inputs.color}
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
      </DialogContent>
      <DialogActions>
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            SAVE
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={dialogClose}
            color="secondary"
          >
            Close
          </Button>
        </div>
      </DialogActions>
    </>
  );
}

export default AddHabit;
