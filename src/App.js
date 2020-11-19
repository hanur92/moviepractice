import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}

export default App;
