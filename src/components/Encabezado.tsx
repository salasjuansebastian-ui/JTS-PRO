import "../styles/encabezado.css";

type Props = {
  paso: number;
  total: number;
  onVolver: () => void;
};

function Encabezado({ paso, total, onVolver }: Props) {
  return (
    <div className="encabezado">

      <button
        className="boton-volver"
        onClick={onVolver}
      >
        ← Volver
      </button>

      <span className="paso">
        Paso {paso} de {total}
      </span>

    </div>
  );
}

export default Encabezado;