import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Number from "./number.jsx";


class MyApp extends React.Component {
  render() {
    return (
      <Number />
    );
  }
}
export default MyApp