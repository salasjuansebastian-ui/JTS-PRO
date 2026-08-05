import { useState } from "react";

import {
  Dumbbell,
  Flame,
  Zap,
  Shield,
} from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import BotonVolver from "../components/BotonVolver";
import Opcion from "../components/Opcion";

import { useUsuario } from "../hooks/useUsuario";

import "../styles/objetivo.css";

type Props = {
  volver: () => void;
  irANivel: () => void;
};

function Objetivo({ volver, irANivel }: Props) {
  const { usuario, setUsuario } = useUsuario();

  const [objetivo, setObjetivo] = useState(usuario.objetivo);

  function continuar() {
    if (!objetivo) return;

    setUsuario({
      ...usuario,
      objetivo,
    });

    irANivel();
  }

  return (
    <div className="app">
      <div className="card">

        <BotonVolver onClick={volver} />

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
          disabled={!objetivo}
        />

      </div>
    </div>
  );
}

export default Objetivo;