import React, { PureComponent } from "react";

class OptimizedComponent extends PureComponent {
  render() {
    console.log(" PureComponent Rendered");
    return <p>PureComponent: {this.props.value}</p>;
  }
}

export default OptimizedComponent;
