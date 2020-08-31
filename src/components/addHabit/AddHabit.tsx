import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, MenuItem } from "@material-ui/core";

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
}));

const colors = [
  {
    value: "red",
    label: "r",
  },
  {
    value: "green",
    label: "g",
  },
  {
    value: "blue",
    label: "b",
  },
];

function AddHabit() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" gutterBottom>
            Create Habit
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                required
                id="habitName"
                name="habitName"
                label="Habbit name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="days"
                name="days"
                label="How long?"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">days</InputAdornment>
                  ),
                }}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* value 스테이트로 만들어야뎀 */}
              <TextField
                id="outlined-select-currency"
                select
                label="color"
                value="red"
                helperText="Please select color"
                variant="outlined"
                required
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
                <FormControlLabel
                  value="Sun"
                  control={<Checkbox color="primary" />}
                  label="Sun"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Mon"
                  control={<Checkbox color="primary" />}
                  label="Mon"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Tue"
                  control={<Checkbox color="primary" />}
                  label="Tue"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Wed"
                  control={<Checkbox color="primary" />}
                  label="Wed"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Thu"
                  control={<Checkbox color="primary" />}
                  label="Thu"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Fri"
                  control={<Checkbox color="primary" />}
                  label="Fri"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Sat"
                  control={<Checkbox color="primary" />}
                  label="Sat"
                  labelPlacement="top"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </>
  );
}

export default AddHabit;
