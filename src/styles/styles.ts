import { makeStyles, Theme } from "@material-ui/core";

export const paperStyle = makeStyles((theme: Theme) => ({
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

export const listStyle = makeStyles((theme: Theme, color?: string) => ({
  list: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    backgroundColor:
      color === "red"
        ? theme.palette.secondary.light
        : theme.palette.primary.light,
    marginBottom: theme.spacing(1),
  },
}));

export const backgroundStyle = makeStyles((theme: Theme) => ({
  "*": { margin: 0, padding: 0 },
  background: {},
  particle: {},
}));
