import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    // added state that lets us know if an error occured.
    this.state = {
      hasErrored: false
    };
  }

  // catches any error that gets thrown that is a child
  // of this component.
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  // Gives access to the error and info
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
