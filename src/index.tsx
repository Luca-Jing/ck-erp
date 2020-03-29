import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

import App from "App";

const app = (
  <Router>
    <App />
  </Router>
);

render(app, document.getElementById("root"));
