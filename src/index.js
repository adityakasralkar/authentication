import React from "react";
import ReactDOM from "react-dom";
import { AuthContexProvider } from "./components/store/auth-contex";
import "./index.css";
import App from "./App";

ReactDOM.render(
<AuthContexProvider>
<App />
</AuthContexProvider>
  
  ,
  document.getElementById("root")
);
