import React, { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {
  googleSignInStart,
  signInWithEmailAndPassword,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = ({ dispatch }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, ...{ [name]: value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = credentials;
    dispatch(signInWithEmailAndPassword({ email, password }));
  }

  return (
    <div className="sign-in">
      <h2 className="heading-secondary">I already have an account</h2>
      <h4 className="heading-tertiary">Sign In with your Email and Password</h4>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          placeholder="Email Adress"
          autoComplete="off"
          label="Email Address"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          placeholder="Password"
          label="Password"
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null)(SignIn);
