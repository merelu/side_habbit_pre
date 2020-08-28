import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../store/actions/login.actions";
import { RootState } from "../../store/reducers";

type LoginProps = {
  toggleOpen: () => void;
  toggleMode: () => void;
};
function Login({ toggleOpen, toggleMode }: LoginProps) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { loggingIn, loggedIn } = useSelector(
    (state: RootState) => state.loginReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      toggleOpen();
    }
  }, [loggedIn]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  //trigger를 만들어서
  const handleSubmit = () => {
    setSubmitted(true);
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
        <Button color="primary" onClick={toggleMode}>
          Register
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Login
        </Button>
        <Button color="primary" onClick={toggleOpen}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default Login;
