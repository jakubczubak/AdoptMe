import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerivedStateFormError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundry caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
