import React, { FC } from "react";

const Signin: FC = () => {
  return (
    <form className="form-signin" method="post">
      <fieldset>
        <legend>Sign in</legend>
        <input
          type="email"
          id="inputEmail"
          placeholder="Email address"
          required
          autoFocus
        />
        <br />
        <input type="password" id="inputPassword" placeholder="Password" />
        <br />
        <button type="button">Sign in</button>
        <br />
        <a href="">회원가입</a>&nbsp;&nbsp;
        <a href="">비밀번호 찾기</a>
      </fieldset>
    </form>
  );
};

export default Signin;
