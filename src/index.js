import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
