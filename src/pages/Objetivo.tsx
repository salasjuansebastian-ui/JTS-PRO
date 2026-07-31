import { useState } from "react";

import {
  Dumbbell,
  Flame,
  Zap,
  Shield,
} from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import Opcion from "../components/Opcion";

import { useUsuario } from "../hooks/useUsuario";

import "../styles/objetivo.css";

type Props = {
  irANivel: () => void;
};

function Objetivo({ irANivel }: Props) {
  const { usuario, setUsuario } = useUsuario();

  const [objetivo, setObjetivo] = useState(usuario.objetivo);

  function continuar() {
    if (!objetivo) return;

    const usuarioActualizado = {
      ...usuario,
      objetivo,
    };

    setUsuario(usuarioActualizado);

    irANivel();
  }

  return (
    <div className="app">
      <div className="card">

        <BarraProgreso
          paso={2}
          total={8}
        />

        <h1 className="titulo-objetivo">
          ¿Cuál es <br />
          tu objetivo?
        </h1>

        <Opcion
          icono={Dumbbell}
          texto="Ganar masa muscular"
          seleccionada={objetivo === "masa"}
          onClick={() => setObjetivo("masa")}
        />

        <Opcion
          icono={Flame}
          texto="Perder grasa"
          seleccionada={objetivo === "grasa"}
          onClick={() => setObjetivo("grasa")}
        />

        <Opcion
          icono={Zap}
          texto="Mejorar rendimiento"
          seleccionada={objetivo === "rendimiento"}
          onClick={() => setObjetivo("rendimiento")}
        />

        <Opcion
          icono={Shield}
          texto="Mantenerme"
          seleccionada={objetivo === "mantener"}
          onClick={() => setObjetivo("mantener")}
        />

        <Boton
          texto="Continuar"
          onClick={continuar}
        />

      </div>
    </div>
  );
}

export default Objetivo;