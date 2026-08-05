import { useState } from "react";

import { CalendarDays } from "lucide-react";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";
import BotonVolver from "../components/BotonVolver";
import Opcion from "../components/Opcion";

import { useUsuario } from "../hooks/useUsuario";

type Props = {
  volver: () => void;
  irADuracion: () => void;
};

function Dias({ volver, irADuracion }: Props) {
  const { usuario, setUsuario } = useUsuario();

  const [dias, setDias] = useState(usuario.dias);

  function continuar() {
    setUsuario({
      ...usuario,
      dias,
    });

    irADuracion();
  }

  return (
    <div className="app">
      <div className="card">

        <BotonVolver onClick={volver} />

        <BarraProgreso paso={6} total={8} />

        <h1>
          ¿Cuántos días por semana podés entrenar?
        </h1>

        <p>
          Elegí la cantidad de días que realmente podés mantener todas las semanas.
        </p>

        {[2, 3, 4, 5, 6].map((dia) => (
          <Opcion
            key={dia}
            icono={CalendarDays}
            texto={`${dia} días`}
            seleccionada={dias === dia}
            onClick={() => setDias(dia)}
          />
        ))}

        <Boton
          texto="Continuar"
          onClick={continuar}
          disabled={!dias}
        />

      </div>
    </div>
  );
}

export default Dias;