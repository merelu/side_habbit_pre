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

type LoginProps = {
  dialogClose: () => void;
  changeRegisterMode: () => void;
};
function Login({ dialogClose, changeRegisterMode }: LoginProps) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // const [submitted, setSubmitted] = useState(false);
  const { loggingIn, loggedIn } = useSelector(
    (state: RootState) => state.loginReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dialogClose();
    }
  }, [dialogClose, loggedIn]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  //trigger를 만들어서
  const handleSubmit = () => {
    //setSubmitted(true);
    dispatch(loginRequest(inputs.username, inputs.password));
  };

  return (
    <>
      <DialogTitle id="Login-dialog-title">Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="username"
          type="name"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={changeRegisterMode}>
          Register
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          {loggingIn && <CircularProgress size={30} />}
          Login
        </Button>
        <Button color="primary" onClick={dialogClose}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default Login;
