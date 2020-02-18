import React, { Component } from 'react';

class ErrorCatcher extends Component {
  state = {error: null}

  static getDerivedStateFromProps() {
    return {error: null};
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const {children, ...props} = this.props;

    return (
      <div {...props}>
        {error ? 'Hubo un error. Edita tu código y vuelve a intentar.' : children}
      </div>
    )
  }
}

export default ErrorCatcher;
