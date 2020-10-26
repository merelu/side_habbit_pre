import { makeStyles, Theme } from "@material-ui/core";

export const buttonStyle = makeStyles((theme: Theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
export const boxStyle = makeStyles((theme: Theme) => ({
  box: {
    background: theme.palette.primary.dark,
    boxSizing: "border-box",
    width: "200px",
    position: "absolute",
    left: "0px",
    textAlign: "center",
    borderRadius: "0 10px 10px 0",
  },
  text: {
    color: theme.palette.primary.contrastText,
    marginBottom: "20px",
    overflow: "visible",
  },
}));
export const listStyle = makeStyles((theme: Theme, color?: string) => ({
  list: {
    width: "100%",
    "& label": {
      position: "relative",
      display: "block",
      fontSize: "20px",
      margin: "10px 0px 10px 20px",
      color: "#000",
      cursor: "pointer",
    },
    "& input[type='checkbox']": {
      WebkitAppearance: "none",
      "&:checked ~ $i": {
        top: "1px",
        borderTop: "none",
        borderRight: "none",
        height: "15px",
        width: "25px",
        transform: "rotate(-45deg)",
      },
      "&:checked ~ .text": {
        "&:before": {
          transform: "translateY(-50%) scaleX(1)",
          transformOrigin: "left",
          transition: "transform 0.5s",
        },
        color: "#2e2e3a",
      },
    },
    "& i": {
      position: "absolute",
      top: "2px",
      display: "inline-block",
      width: "25px",
      height: "25px",
      border: "2px solid #000",
    },
    "& .text": {
      display: "inline",
      position: "relative",
      left: "40px",
      transition: "0.5s",
      "&:before": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        height: "1px",
        background: "#000",
        transform: "translateY(-50%) scaleX(0)",
        transformOrigin: "right",
        transition: "transform 0.5s",
      },
    },
  },
  right: {
    marginLeft: "auto",
    marginRight: "20px",
  },
}));

export const appBarStyle = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.dark,
  },
  left: {
    flexGrow: 1,
  },
}));

export const paperStyle = makeStyles((theme: Theme) => ({
  background: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: theme.palette.primary.light,
  },
  header: {
    width: "100%",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    maxWidth: "1500px",
    minHeight: "100vh",
    margin: "auto",
  },
}));
