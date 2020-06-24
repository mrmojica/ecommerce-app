import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../../components/FormInput/FormInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./SignInStyles";
import {
  googleSignInStart,
  emailSignInStart
} from "../../../redux/user/userActions";

// TODO: Fix tags and add input error feedback.
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [useCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = useCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...useCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="text"
          value={useCredentials.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={useCredentials.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          {/* Set type to 'button' to overide submit type */}
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
