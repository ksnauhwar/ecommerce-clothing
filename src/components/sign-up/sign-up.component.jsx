import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ dispatch }) => {
  const [userInformation, setUserInformation] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, displayName, password, confirmPassword } = userInformation;

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInformation({ ...userInformation, ...{ [name]: value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    dispatch(
      signUpStart({
        email,
        displayName,
        password,
      })
    );
    setUserInformation({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="sign-up">
      <h2 className="heading-secondary">I do not have an account</h2>
      <h4 className="heading-tertiary">Sign Up with your Email and Password</h4>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Enter your name"
          name="displayName"
          value={displayName}
          required
          label="Enter your name"
          handleChange={handleChange}
        />
        <FormInput
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          required
          label="Email Address"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          required
          label="Password"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          required
          label="Confirm Password"
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default connect()(SignUp);
