import BarraProgreso from "../components/BarraProgreso";
import Boton from "../components/Boton";

import { useUsuario } from "../hooks/useUsuario";

import { generarRutina } from "../engine/rutinaEngine";

function Resumen() {
  const { usuario } = useUsuario();

  function crearRutina() {
    generarRutina();
  }

  return (
    <div className="app">
      <div className="card">
        <BarraProgreso paso={8} total={8} />

        <h1>Revisemos tu perfil</h1>

        <p>
          Estos son los datos que usaremos para crear tu plan personalizado.
        </p>

        <div className="resumen">
          <p>
            <strong>Nombre:</strong> {usuario.nombre}
          </p>

          <p>
            <strong>Edad:</strong> {usuario.edad} años
          </p>

          <p>
            <strong>Peso:</strong> {usuario.peso} kg
          </p>

          <p>
            <strong>Altura:</strong> {usuario.altura} cm
          </p>

          <hr />

          <p>
            <strong>Objetivo:</strong> {usuario.objetivo}
          </p>

          <p>
            <strong>Nivel:</strong> {usuario.nivel}
          </p>

          <p>
            <strong>Días por semana:</strong> {usuario.dias}
          </p>

          <p>
            <strong>Duración:</strong> {usuario.duracion} minutos
          </p>

          <hr />

          <p>
            <strong>Equipamiento:</strong>
          </p>

          <ul>
            {usuario.equipamiento.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>
            <strong>Lesiones:</strong>
          </p>

          <ul>
            {usuario.lesiones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <Boton
          texto="🚀 Crear mi rutina"
          onClick={crearRutina}
        />
      </div>
    </div>
  );
}

export default Resumen;