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
import Resumen from "./pages/Resumen";

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
          volver={() => setPantalla("registro")}
          irANivel={() => setPantalla("nivel")}
        />
      );

    case "nivel":
      return (
        <Nivel
          volver={() => setPantalla("objetivo")}
          irAEquipamiento={() => setPantalla("equipamiento")}
        />
      );

    case "equipamiento":
      return (
        <Equipamiento
          volver={() => setPantalla("nivel")}
          irALesiones={() => setPantalla("lesiones")}
        />
      );

    case "lesiones":
      return (
        <Lesiones
          volver={() => setPantalla("equipamiento")}
          irADias={() => setPantalla("dias")}
        />
      );

    case "dias":
      return (
        <Dias
          volver={() => setPantalla("lesiones")}
          irADuracion={() => setPantalla("duracion")}
        />
      );

    case "duracion":
      return (
        <Duracion
          volver={() => setPantalla("dias")}
          irAResumen={() => setPantalla("resumen")}
        />
      );

    case "resumen":
      return (
        <Resumen
          volver={() => setPantalla("duracion")}
          generarRutina={() => console.log("Generar rutina")}
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