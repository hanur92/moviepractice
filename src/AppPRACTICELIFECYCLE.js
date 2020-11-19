import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Before Render/ constructor!");
  }
  state = {
    count: 0,
  };
  onAdd = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  onMinus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
  componentDidMount() {
    console.log("component RENDERED");
  }
  componentDidUpdate() {
    console.log("component UPDATED!");
  }
  componentWillUnmount() {
    alert("Adios! COMPONENT");
    console.log("Adios! COMPONENT");
  }
  render() {
    console.log("RENDERing!!");
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.onAdd}> + </button>
        <button onClick={this.onMinus}> - </button>
      </div>
    );
  }
}

export default App;
