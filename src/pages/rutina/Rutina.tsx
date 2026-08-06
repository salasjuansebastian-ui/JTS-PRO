import "./Rutina.css";

import { useRoutine } from "../../engine/hooks/useRoutine";

import RutinaCard from "./components/RutinaCard";

function Rutina(){

    const {rutina}=useRoutine();

    return(

        <div className="app">

            <div className="card">

                <h1>

                    Tu rutina personalizada

                </h1>

                {

                    rutina.map(

                        (dia)=>(

                            <RutinaCard

                                key={dia.nombre}

                                nombre={dia.nombre}

                                ejercicios={dia.ejercicios}

                            />

                        )

                    )

                }

            </div>

        </div>

    );

}

export default Rutina;