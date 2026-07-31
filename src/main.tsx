import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { UsuarioProvider } from "./contexts/UsuarioContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </React.StrictMode>
);