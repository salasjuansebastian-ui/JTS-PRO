import "../styles/barraProgreso.css";

type Props = {
  paso: number;
  total: number;
};

function BarraProgreso({ paso, total }: Props) {
  const porcentaje = (paso / total) * 100;

  return (
    <div className="contenedor-progreso">

      <p className="texto-paso">
        Paso {paso} de {total}
      </p>

      <div className="barra">
        <div
          className="relleno"
          style={{ width: `${porcentaje}%` }}
        />
      </div>

    </div>
  );
}

export default BarraProgreso;