import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    document.title = `You have clicked this ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You have clicked this ${this.state.count} times`;
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click Here!!!
        </button>
        <p>Clicked : {count} times</p>
      </div>
    );
  }
}
