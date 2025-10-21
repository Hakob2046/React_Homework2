import React, { Component } from "react";

class NormalComponent extends Component {
  render() {
    console.log(" NormalComponent Rendered");
    return <p>Normal Component: {this.props.value}</p>;
  }
}

export default NormalComponent;
