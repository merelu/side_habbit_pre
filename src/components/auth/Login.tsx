import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../store/actions/auth.actions";
import { RootState } from "../../store/reducers";
import { CircularProgress } from "@material-ui/core";
import { boxStyle } from "../../styles";
import { History } from "history";

interface LoginProps {
  dialogClose: () => void;
  changeRegisterMode: () => void;
  history: History;
  open: boolean;
}
function Login({ open, dialogClose, changeRegisterMode, history }: LoginProps) {
  const style = boxStyle();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [submitted, setSubmitted] = useState(false);
  const { loggingIn, loggedIn, error } = useSelector(
    (state: RootState) => state.authReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dialogClose();
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  //trigger를 만들어서
  const loginSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password) {
      dispatch(loginRequest(inputs.email, inputs.password));
    }
  };
  useEffect(() => {
    if (error?.message === "Network Error") {
      history.push("/networkerror");
    }
  }, [error, history]);

  return (
    <>
      <DialogTitle id="Login-dialog-title" className={style.text}>
        <div className={style.box}>Login</div>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          error={submitted && !email ? true : false}
          margin="dense"
          id="email"
          label="Email"
          type="email"
          helperText={submitted && !email && "Email is required"}
          fullWidth
          onChange={handleChange}
        />
        <TextField
          error={submitted && !password ? true : false}
          margin="dense"
          id="password"
          label="Password"
          type="password"
          helperText={submitted && !password && "Password is required"}
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={changeRegisterMode}>Register</Button>
        <Button onClick={loginSubmit}>
          {loggingIn && <CircularProgress size={30} />}
          Login
        </Button>
        <Button onClick={dialogClose}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export default Login;
