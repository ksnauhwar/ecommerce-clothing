import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrorOccurred: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("getDS", error);
    return { isErrorOccurred: true };
  }
  componentDidCatch(error) {
    console.log("componendDidCatch", error);
  }
  render() {
    if (this.state.isErrorOccurred) {
      return <div className="error-boundary">Something went wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
