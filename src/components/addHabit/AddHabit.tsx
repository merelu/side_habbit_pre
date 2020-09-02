import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, MenuItem, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const colors = [
  {
    value: "red",
  },
  {
    value: "green",
  },
  {
    value: "blue",
  },
];

const dayOfWeek = [
  { id: 0, value: "Mon" },
  { id: 1, value: "Tue" },
  { id: 2, value: "Wed" },
  { id: 3, value: "Thu" },
  { id: 4, value: "Fri" },
  { id: 5, value: "Sat" },
  { id: 6, value: "Sun" },
];

function AddHabit() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    habbit_Name: "",
    habbit_days: 0,
    habbit_color: "",
    dayOfWeek: [false, false, false, false, false, false, false],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({ ...inputs, habbit_color: e.target.value }));
  };
  const handlCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      dayOfWeek: inputs.dayOfWeek.map((x, index) =>
        index === Number(e.target.name) ? e.target.checked : x
      ),
    }));
  };
  //작성해야할것
  const handleSubmit = () => {
    console.log(inputs);
  };
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={5}>
          <Typography variant="h4" gutterBottom>
            Create Habit
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
                id="habbit_days"
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
                        checked={inputs.dayOfWeek[day.id]}
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
