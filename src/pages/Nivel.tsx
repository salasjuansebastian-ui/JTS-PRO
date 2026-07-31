import { useState } from "react";

import {
  Trophy,
  Dumbbell,
  Medal,
} from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import Opcion from "../components/Opcion";

import "../styles/nivel.css";

function Nivel() {
  const [nivel, setNivel] = useState("");

  function continuar() {
    console.log("Nivel:", nivel);
  }

  return (
    <div className="app">
      <div className="card">

        <BarraProgreso
          paso={3}
          total={8}
        />

        <h1 className="titulo-objetivo">
          ¿Cuál es tu nivel?
        </h1>

        <Opcion
          icono={Trophy}
          texto="Principiante"
          seleccionada={nivel === "principiante"}
          onClick={() => setNivel("principiante")}
        />

        <Opcion
          icono={Dumbbell}
          texto="Intermedio"
          seleccionada={nivel === "intermedio"}
          onClick={() => setNivel("intermedio")}
        />

        <Opcion
          icono={Medal}
          texto="Avanzado"
          seleccionada={nivel === "avanzado"}
          onClick={() => setNivel("avanzado")}
        />

        <Boton
          texto="Continuar"
          onClick={continuar}
        />

      </div>
    </div>
  );
}

export default Nivel;