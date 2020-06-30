import React from "react";
import Spinner from "../../components/Spinner/Spinner";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...props} />;

export default WithSpinner;
