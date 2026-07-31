import { useState } from "react";

import "./App.css";

import Bienvenida from "./pages/Bienvenida";
import Registro from "./pages/Registro";
import Objetivo from "./pages/Objetivo";
import Nivel from "./pages/Nivel";
import Equipamiento from "./pages/Equipamiento";
import Lesiones from "./pages/Lesiones";
import Dias from "./pages/Dias";
import Duracion from "./pages/Duracion";

function App() {
  const [pantalla, setPantalla] = useState("bienvenida");

  switch (pantalla) {
    case "bienvenida":
      return (
        <Bienvenida
          irARegistro={() => setPantalla("registro")}
        />
      );

    case "registro":
      return (
        <Registro
          irAObjetivo={() => setPantalla("objetivo")}
        />
      );

    case "objetivo":
      return (
        <Objetivo
          irANivel={() => setPantalla("nivel")}
        />
      );

    case "nivel":
      return (
        <Nivel
          irAEquipamiento={() => setPantalla("equipamiento")}
        />
      );

    case "equipamiento":
      return (
        <Equipamiento
          irALesiones={() => setPantalla("lesiones")}
        />
      );

    case "lesiones":
      return (
        <Lesiones
          irADias={() => setPantalla("dias")}
        />
      );

    case "dias":
      return (
        <Dias
          irADuracion={() => setPantalla("duracion")}
        />
      );

    case "duracion":
      return (
        <Duracion
          irAResumen={() => console.log("Ir al resumen")}
        />
      );

    default:
      return (
        <Bienvenida
          irARegistro={() => setPantalla("registro")}
        />
      );
  }
}

export default App;