import React, { Component } from "react";

export default class ClassComponent2 extends Component {
  state = {
    count: 0,
    name: "",
  };

  componentDidMount() {
    document.title = `You have clicked this ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `You have clicked this ${this.state.count} times`;
    }
  }
  render() {
    const { count, name } = this.state;
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click Here!!!
        </button>
        <p>Clicked : {count} times</p>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
      </div>
    );
  }
}
