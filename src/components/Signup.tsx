import React from "react";

const Signup: React.FC = () => {
  return (
    <form className="form-signin" method="post">
      <fieldset>
        <legend>Sign up</legend>
        <input
          type="name"
          id="inputName"
          placeholder="Name"
          required
          autoFocus
        />
        <br />
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
        <button type="button">Sign up</button>
        <br />
      </fieldset>
    </form>
  );
};

export default Signup;
