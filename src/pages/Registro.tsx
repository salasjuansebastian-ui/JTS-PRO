import { useState } from "react";

import Boton from "../components/Boton";
import BarraProgreso from "../components/BarraProgreso";
import Encabezado from "../components/Encabezado";

import { useUsuario } from "../hooks/useUsuario";

import "../styles/registro.css";

type Props = {
  irAObjetivo: () => void;
};

function Registro({ irAObjetivo }: Props) {
  const { setUsuario } = useUsuario();

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function continuar() {
    setUsuario({
      nombre,
      edad,
      peso,
      altura,
      objetivo: "",
      nivel: "",
      equipamiento: [],
      lesiones: [],
      dias: 3,
      duracion: 60,
    });

    irAObjetivo();
  }

  return (
    <div className="app">
      <div className="card">

        <Encabezado
          paso={1}
          total={8}
          onVolver={() => {}}
        />

        <BarraProgreso
          paso={1}
          total={8}
        />

        <h1>Registro</h1>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <Boton
          texto="Continuar"
          onClick={continuar}
        />

      </div>
    </div>
  );
}

export default Registro;