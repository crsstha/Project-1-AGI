import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/navbar";

ReactDOM.render(
  <Router>
    <Form />
  </Router>,
  document.getElementById("root")
);
