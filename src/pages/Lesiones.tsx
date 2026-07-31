import { useState } from "react";

import {
  ShieldAlert,
  Bone,
  Activity,
  Circle,
} from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import Opcion from "../components/Opcion";

import { useUsuario } from "../hooks/useUsuario";

type Props = {
  irADias: () => void;
};

function Lesiones({ irADias }: Props) {
  const { usuario, setUsuario } = useUsuario();

  const [lesiones, setLesiones] = useState<string[]>(
    usuario.lesiones
  );

  function seleccionar(opcion: string) {
    if (opcion === "ninguna") {
      setLesiones(["ninguna"]);
      return;
    }

    const nuevasLesiones = lesiones.filter(
      (item) => item !== "ninguna"
    );

    if (nuevasLesiones.includes(opcion)) {
      setLesiones(
        nuevasLesiones.filter((item) => item !== opcion)
      );
    } else {
      setLesiones([
        ...nuevasLesiones,
        opcion,
      ]);
    }
  }

  function continuar() {
    setUsuario({
      ...usuario,
      lesiones,
    });

    irADias();
  }

  return (
    <div className="app">
      <div className="card">

        <BarraProgreso
          paso={5}
          total={8}
        />

        <h1>
          ¿Hay alguna lesión o molestia que debamos tener en cuenta?
        </h1>

        <p>
          Adaptaremos la rutina para minimizar riesgos y cuidar tu salud.
        </p>

        <Opcion
          icono={Bone}
          texto="Rodilla"
          seleccionada={lesiones.includes("rodilla")}
          onClick={() => seleccionar("rodilla")}
        />

        <Opcion
          icono={Activity}
          texto="Espalda"
          seleccionada={lesiones.includes("espalda")}
          onClick={() => seleccionar("espalda")}
        />

        <Opcion
          icono={ShieldAlert}
          texto="Hombro"
          seleccionada={lesiones.includes("hombro")}
          onClick={() => seleccionar("hombro")}
        />

        <Opcion
          icono={Circle}
          texto="Ninguna"
          seleccionada={lesiones.includes("ninguna")}
          onClick={() => seleccionar("ninguna")}
        />

        <Boton
          texto="Continuar"
          onClick={continuar}
        />

      </div>
    </div>
  );
}

export default Lesiones;