import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../services/api";
import { registerRequest } from "../../store/actions/register.acitons";
import { RootState } from "../../store/reducers";
import { CircularProgress } from "@material-ui/core";
type RegisterProps = {
  changeLoginMode: () => void;
  dialogClose: () => void;
};
function Register({ changeLoginMode, dialogClose }: RegisterProps) {
  const [inputs, setInputs] = useState<User>({
    username: "",
    password: "",
    name: "",
    id: 0,
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
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          type="name"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={registerSubmit}>
          {loading && <CircularProgress size={30} />}
          confirm
        </Button>
        <Button color="primary" onClick={changeLoginMode}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default Register;
