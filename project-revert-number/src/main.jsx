import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App.jsx";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

class UserNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 20,
    };
  }

  render() {
    function decrement(num) {
      if (num > 0) {
        return num - 1
      }else {
        return 0
      }
      // return num > 0 ? num - 1 : 0;
    }
    setInterval(() => {
      this.setState({
        count: decrement(this.state.count),
      });
    }, 1000);

    return (
      <div className="container">
        <p className="counter">number is reversing: {this.state.count}</p>
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(<UserNumber />);
