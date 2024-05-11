import {Component} from 'react';

export const ERROR_IS_NOT_DATA = 'IS_NOT_DATA';
export const ERROR_API = 'API_ERROR';

export const RESET_ERROR = 'RESET_ERROR';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  reset() {
    setTimeout(() => {
      this.props.resetError();
      this.setState({hasError: false});
    }, 5000)
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error);
    // this.setState({hasError: true});
    switch (error.message) {
      case ERROR_IS_NOT_DATA:
        this.setState({hasError: true, errorMessage: "We can't use data"});
        this.reset();
        break;
      case ERROR_API:
        this.setState({hasError: true, errorMessage: "Server is not available at the moment"});
        this.reset();
        break;
      default:
        this.setState({hasError: true, errorMessage: "Some think wrong!!!"});

    }
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;