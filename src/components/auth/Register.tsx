import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../services";
import { registerRequest } from "../../store/actions/register.acitons";
import { RootState } from "../../store/reducers";
import { CircularProgress } from "@material-ui/core";

interface RegisterProps {
  changeLoginMode: () => void;
  dialogClose: () => void;
}
function Register({ changeLoginMode, dialogClose }: RegisterProps) {
  const [inputs, setInputs] = useState<User>({
    email: "",
    password: "",
    full_name: "",
  });
  const loading = useSelector(
    (state: RootState) => state.registerReducer.loading
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };

  const registerSubmit = () => {
    dispatch(registerRequest(inputs));
    changeLoginMode();
  };

  return (
    <>
      <DialogTitle id="Register-dialog-title">Register</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="email"
          type="email"
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
        <TextField
          autoFocus
          margin="dense"
          id="full_name"
          label="full_name"
          type="text"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={registerSubmit}>
          {loading && <CircularProgress size={30} />}
          confirm
        </Button>
        <Button onClick={changeLoginMode}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export default Register;
