import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../services";
import {
  registerRequest,
  registerReset,
} from "../../store/actions/register.acitons";
import { RootState } from "../../store/reducers";
import { CircularProgress } from "@material-ui/core";
import { boxStyle } from "../../styles";
import Alert from "@material-ui/lab/Alert";
import { clear } from "../../store/actions";

interface RegisterProps {
  changeLoginMode: () => void;
}
function Register({ changeLoginMode }: RegisterProps) {
  const style = boxStyle();
  const [inputs, setInputs] = useState<User>({
    email: "",
    password: "",
    full_name: "",
  });
  const { email, password, full_name } = inputs;
  const [submitted, setSubmitted] = useState(false);
  const { registered } = useSelector(
    (state: RootState) => state.registerReducer
  );
  const { alert_type, message, sbOpen } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };

  const registerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password && full_name) {
      dispatch(registerRequest(inputs));
    }
  };
  useEffect(() => {
    if (registered) {
      changeLoginMode();
      dispatch(registerReset());
    }
  });

  return (
    <>
      <DialogTitle id="Register-dialog-title" className={style.text}>
        <div className={style.box}>Register</div>
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
        <TextField
          error={submitted && !full_name ? true : false}
          margin="dense"
          id="full_name"
          label="Full name"
          type="text"
          helperText={submitted && !full_name && "Full name is required"}
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={registerSubmit}>confirm</Button>
        <Button
          onClick={() => {
            changeLoginMode();
            dispatch(clear());
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default Register;
