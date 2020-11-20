import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  InputAdornment,
  MenuItem,
  Button,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addHabitRequest } from "../../store/actions/addHabit.actions";
import { boxStyle, buttonStyle } from "../../styles";
import { AddHabitInputsType } from "../../store/types";
import { RootState } from "../../store/reducers";
import Alert from "@material-ui/lab/Alert";
import { clear } from "../../store/actions";

type AddHabitProps = {
  dialogClose: () => void;
};

function AddHabit({ dialogClose }: AddHabitProps) {
  const style = { button: buttonStyle(), box: boxStyle() };
  const [inputs, setInputs] = useState<AddHabitInputsType>({
    name: "",
    period: 0,
    habit_type: "",
    check_day_of_week: [false, false, false, false, false, false, false],
  });
  const dayOfWeek = [
    { id: 0, value: "Sun" },
    { id: 1, value: "Mon" },
    { id: 2, value: "Tue" },
    { id: 3, value: "Wed" },
    { id: 4, value: "Thu" },
    { id: 5, value: "Fri" },
    { id: 6, value: "Sat" },
  ];
  const habitType = [
    {
      value: "Excercise",
    },
    {
      value: "Study",
    },
    {
      value: "Time",
    },
  ];
  const { loading } = useSelector((state: RootState) => state.addHabitReducer);
  const { alert_type, message, sbOpen } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [id]: type === "number" ? parseInt(value) : value,
    }));
  };
  const handleHabitType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({ ...inputs, habit_type: e.target.value }));
  };
  const handlCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      check_day_of_week: inputs.check_day_of_week.map((x, index) =>
        index === Number(e.target.name) ? e.target.checked : x
      ),
    }));
  };
  useEffect(() => {
    if (loading === false) {
      dialogClose();
    }
  });
  //작성해야할것
  const handleSubmit = () => {
    dispatch(addHabitRequest(inputs));
  };

  return (
    <>
      <DialogTitle id="Login-dialog-title" className={style.box.text}>
        <div className={style.box.box}>Create habit</div>
      </DialogTitle>
      <DialogContent style={{ overflow: "hidden" }}>
        {message && !sbOpen && (
          <Alert
            variant="outlined"
            severity={alert_type}
            onClose={() => {
              dispatch(clear());
            }}
          >
            {message}
          </Alert>
        )}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
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
              label="Habit Type"
              value={inputs.habit_type}
              helperText="Please select habit type"
              variant="outlined"
              required
              onChange={handleHabitType}
            >
              {habitType.map((option) => (
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
                      checked={inputs.check_day_of_week[day.id]}
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
        <div className={style.button.buttons}>
          <Button
            className={style.button.button}
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            SAVE
          </Button>
          <Button
            className={style.button.button}
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
