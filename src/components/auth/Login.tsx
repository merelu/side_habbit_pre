import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../store/actions/auth.actions";
import { RootState } from "../../store/reducers";
import { boxStyle } from "../../styles";
import Alert from "@material-ui/lab/Alert";
import { clear } from "../../store/actions";

interface LoginProps {
  dialogClose: () => void;
  changeRegisterMode: () => void;
}
function Login({ dialogClose, changeRegisterMode }: LoginProps) {
  const style = boxStyle();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [submitted, setSubmitted] = useState(false);
  const { loggingIn, loggedIn } = useSelector(
    (state: RootState) => state.authReducer
  );
  const { alert_type, message, sbOpen } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };

  const loginSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password) {
      dispatch(loginRequest(inputs.email, inputs.password));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      dialogClose();
    }
  });

  return (
    <>
      <DialogTitle id="Login-dialog-title" className={style.text}>
        <div className={style.box}>Login</div>
      </DialogTitle>
      <DialogContent>
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
        <Button onClick={loginSubmit}>Login</Button>
        <Button
          onClick={() => {
            dialogClose();
            dispatch(clear());
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default Login;
