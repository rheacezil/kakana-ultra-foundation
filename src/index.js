import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

<<<<<<< Updated upstream
const root = ReactDOM.createRoot(document.getElementById("root"));
=======
// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> Stashed changes
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
