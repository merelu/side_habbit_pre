import React from "react";
import LoginDialog from "../components/auth/LoginDialog";
import { useSelector } from "react-redux";
import rootReducer, { RootState } from "../store/reducers";

// function authenticate(
//     username: string,
//     password: string
//   ): string {
//     const user = users.find(
//       (x) => x.username === username && x.password === password
//     );
//     if (!user) {
//       console.log("username or password is incorrect");
//     }
//     return username;
//   }

function LoginApp() {
  return (
    <>
      <LoginDialog />
    </>
  );
}
export default LoginApp;
