import React from "react";
import SignIn from "./SignIn//SignIn";
import SignUp from "./SignUp/SignUp";
import { SignInAndSignUpContainer } from "./SignInAndSignUpStyles";

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
