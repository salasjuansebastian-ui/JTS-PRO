import { useState } from "react";

import "./App.css";

import Bienvenida from "./pages/Bienvenida";
import Registro from "./pages/Registro";
import Objetivo from "./pages/Objetivo";

function App() {
  const [pantalla, setPantalla] = useState("bienvenida");

  if (pantalla === "bienvenida") {
    return (
      <Bienvenida
        irARegistro={() => setPantalla("registro")}
      />
    );
  }

  if (pantalla === "registro") {
    return (
      <Registro
        irAObjetivo={() => setPantalla("objetivo")}
      />
    );
  }

  return <Objetivo />;
}

export default App;