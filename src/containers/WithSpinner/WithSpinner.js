import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...props} />
  );

export default WithSpinner;
