import "../styles/opcion.css";

import { Check } from "lucide-react";
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

      {seleccionada && (
        <Check
          size={22}
          strokeWidth={3}
        />
      )}

    </button>
  );
}

export default Opcion;