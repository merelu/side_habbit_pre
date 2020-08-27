import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

type LoginProps = {
  toggleOpen: () => void;
  toggleMode: () => void;
};
function Login({ toggleOpen, toggleMode }: LoginProps) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  const handleSubmit = () => {};

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
        <Button color="primary" onClick={toggleOpen}>
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
