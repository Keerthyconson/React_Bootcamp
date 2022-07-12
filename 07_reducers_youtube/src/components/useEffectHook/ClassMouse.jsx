import React, { Component } from "react";
class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  logMousePosition = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        <p>X : {this.state.x}</p>
        <p>Y : {this.state.y}</p>
      </div>
    );
  }
}

export default ClassMouse;
