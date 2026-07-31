import "../styles/bienvenida.css";
import Boton from "../components/Boton";

type Props = {
  irARegistro: () => void;
};

function Bienvenida({ irARegistro }: Props) {
  return (
    <div className="app">
      <div className="card">

        <div className="logo">💪</div>

        <h1>JTS PRO</h1>

        <p className="subtitulo">
          Tu entrenador personal con IA
        </p>

        <div className="linea"></div>

        <div className="beneficios">
          <p>✅ Rutinas inteligentes</p>
          <p>🏋️ Seguimiento de pesos</p>
          <p>📈 Historial completo</p>
          <p>🤖 IA que aprende de vos</p>
        </div>

        <Boton
          texto="Comenzar"
          onClick={irARegistro}
        />

      </div>
    </div>
  );
}

export default Bienvenida;