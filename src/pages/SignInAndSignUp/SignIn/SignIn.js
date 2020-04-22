import React, { useState } from "react";
import FormInput from "../../../components/FormInput/FormInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { signInWithGoogle, auth } from "../../../Firebase/utils";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./SignInStyles";

// TODO: Fix tags and add input error feedback.
const SignIn = () => {
  const [useCredentials, setCredentials] = useState({
    email: "",
    setCredentials: ""
  });

  const { email, password } = useCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials(useCredentials);
    } catch (error) {
      console.log(error);
    }
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
