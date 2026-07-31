import "../styles/opcion.css";

import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  icono: LucideIcon;
  texto: string;
  seleccionada: boolean;
  onClick: () => void;
};

function Opcion({
  icono: Icono,
  texto,
  seleccionada,
  onClick,
}: Props) {
  return (
    <button
      className={`opcion ${seleccionada ? "seleccionada" : ""}`}
      onClick={onClick}
    >
      <div className="lado-izquierdo">

        <Icono
          size={24}
          className="icono"
        />

        <span>{texto}</span>

      </div>

      <ChevronRight size={22} />

    </button>
  );
}

export default Opcion;