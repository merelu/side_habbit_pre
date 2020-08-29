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
type RegisterProps = {
  toggleMode: () => void;
  toggleOpen: () => void;
};
function Register({ toggleMode, toggleOpen }: RegisterProps) {
  const [inputs, setInputs] = useState<User>({
    username: "",
    password: "",
    name: "",
    id: 0,
  });
  const { registered } = useSelector(
    (state: RootState) => state.registerReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (registered) {
      toggleMode();
    }
  }, [toggleMode, registered]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };

  const registerSubmit = () => {
    dispatch(registerRequest(inputs));
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
          Register
        </Button>
        <Button color="primary" onClick={toggleOpen}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default Register;
