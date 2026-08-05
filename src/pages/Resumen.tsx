import "./../styles/resumen.css";

import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";

import { useUsuario } from "../hooks/useUsuario";

type Props = {
  volver: () => void;
  generarRutina: () => void;
};

function traducirObjetivo(valor: string) {
  switch (valor) {
    case "masa":
      return "Ganar masa muscular";

    case "grasa":
      return "Perder grasa";

    case "rendimiento":
      return "Mejorar rendimiento";

    case "mantener":
      return "Mantenerme";

    default:
      return valor;
  }
}

function traducirNivel(valor: string) {
  switch (valor) {
    case "principiante":
      return "Principiante";

    case "intermedio":
      return "Intermedio";

    case "avanzado":
      return "Avanzado";

    default:
      return valor;
  }
}

type EquipamientoMap = Record<string, string>;

const EQUIPAMIENTO: EquipamientoMap = {
  gym: "Gimnasio completo",
  casa: "Entreno en casa",
  parque: "Parque",
  mancuernas: "Mancuernas",
  bandas: "Bandas elásticas",
  barra: "Barra y discos",
};

const LESIONES: Record<string, string> = {
  rodilla: "Rodilla",
  espalda: "Espalda",
  hombro: "Hombro",
  ninguna: "Ninguna",
};

function Resumen({
  volver,
  generarRutina,
}: Props) {

  const { usuario } = useUsuario();

  return (
    <div className="app">
      <div className="card">

        <BarraProgreso
          paso={8}
          total={8}
        />

        <h1>
          Revisá tu configuración
        </h1>

        <p>
          Confirmá tus respuestas antes de generar tu rutina personalizada.
        </p>

        <div className="resumen-item">
          <strong>🎯 Objetivo</strong>
          <p>{traducirObjetivo(usuario.objetivo)}</p>
        </div>

        <div className="resumen-item">
          <strong>💪 Nivel</strong>
          <p>{traducirNivel(usuario.nivel)}</p>
        </div>

        <div className="resumen-item">
          <strong>🏋 Equipamiento</strong>
          <p>
            {usuario.equipamiento
              .map((e) => EQUIPAMIENTO[e])
              .join(", ")}
          </p>
        </div>

        <div className="resumen-item">
          <strong>🩺 Lesiones</strong>
          <p>
            {usuario.lesiones
              .map((l) => LESIONES[l])
              .join(", ")}
          </p>
        </div>

        <div className="resumen-item">
          <strong>📅 Frecuencia</strong>
          <p>{usuario.dias} días</p>
        </div>

        <div className="resumen-item">
          <strong>⏱ Duración</strong>
          <p>{usuario.duracion} minutos</p>
        </div>

        <div className="resumen-botones">

          <Boton
            texto="Modificar"
            onClick={volver}
          />

          <Boton
            texto="Generar mi rutina"
            onClick={generarRutina}
          />

        </div>

      </div>
    </div>
  );
}

export default Resumen;