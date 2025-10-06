import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

var interval;
function decrement(num) {
  if (num > 0) {
    return num - 1;
  } else {
    clearInterval(interval);
    return 0;
  }
}

class Number extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }
  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        count: decrement(this.state.count),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="container">
        <p className="counter">number is reversing: {this.state.count}</p>
      </div>
    );
  }
}
export default Number;
