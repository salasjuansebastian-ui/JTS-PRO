import { useState } from "react";

import { Clock3 } from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import Opcion from "../components/Opcion";

import { useUsuario } from "../hooks/useUsuario";

type Props = {
  irAResumen: () => void;
};

function Duracion({ irAResumen }: Props) {
  const { usuario, setUsuario } = useUsuario();

  const [duracion, setDuracion] = useState(usuario.duracion);

  function continuar() {
    setUsuario({
      ...usuario,
      duracion,
    });

    irAResumen();
  }

  return (
    <div className="app">
      <div className="card">

        <BarraProgreso
          paso={7}
          total={8}
        />

        <h1>
          ¿Cuánto tiempo podés dedicarle a cada entrenamiento?
        </h1>

        <p>
          Adaptaremos el volumen de entrenamiento según el tiempo que tengas disponible.
        </p>

        {[30,45,60,75,90].map((minutos) => (
          <Opcion
            key={minutos}
            icono={Clock3}
            texto={`${minutos} minutos`}
            seleccionada={duracion === minutos}
            onClick={() => setDuracion(minutos)}
          />
        ))}

        <Boton
          texto="Continuar"
          onClick={continuar}
        />

      </div>
    </div>
  );
}

export default Duracion;