import { useState } from "react";

import {
  Dumbbell,
  House,
  Trees,
  Shield,
  Cable,
  Circle,
} from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import BotonVolver from "../components/BotonVolver";
import Opcion from "../components/Opcion";

import { useUsuario } from "../hooks/useUsuario";

type Props = {
  volver: () => void;
  irALesiones: () => void;
};

function Equipamiento({ volver, irALesiones }: Props) {
  const { usuario, setUsuario } = useUsuario();

  const [equipamiento, setEquipamiento] = useState<string[]>(
    usuario.equipamiento
  );

  function seleccionar(opcion: string) {
    if (equipamiento.includes(opcion)) {
      setEquipamiento(
        equipamiento.filter((item) => item !== opcion)
      );
    } else {
      setEquipamiento([...equipamiento, opcion]);
    }
  }

  function continuar() {
    setUsuario({
      ...usuario,
      equipamiento,
    });

    irALesiones();
  }

  return (
    <div className="app">
      <div className="card">

        <BotonVolver onClick={volver} />

        <BarraProgreso paso={4} total={8} />

        <h1>¿Qué equipamiento tenés disponible?</h1>

        <p>
          Seleccioná todas las opciones que correspondan.
        </p>

        <Opcion
          icono={Dumbbell}
          texto="Gimnasio completo"
          seleccionada={equipamiento.includes("gym")}
          onClick={() => seleccionar("gym")}
        />

        <Opcion
          icono={House}
          texto="Entreno en casa"
          seleccionada={equipamiento.includes("casa")}
          onClick={() => seleccionar("casa")}
        />

        <Opcion
          icono={Trees}
          texto="Parque"
          seleccionada={equipamiento.includes("parque")}
          onClick={() => seleccionar("parque")}
        />

        <Opcion
          icono={Shield}
          texto="Mancuernas"
          seleccionada={equipamiento.includes("mancuernas")}
          onClick={() => seleccionar("mancuernas")}
        />

        <Opcion
          icono={Cable}
          texto="Bandas elásticas"
          seleccionada={equipamiento.includes("bandas")}
          onClick={() => seleccionar("bandas")}
        />

        <Opcion
          icono={Circle}
          texto="Barra y discos"
          seleccionada={equipamiento.includes("barra")}
          onClick={() => seleccionar("barra")}
        />

        <Boton
          texto="Continuar"
          onClick={continuar}
          disabled={equipamiento.length === 0}
        />

      </div>
    </div>
  );
}

export default Equipamiento;