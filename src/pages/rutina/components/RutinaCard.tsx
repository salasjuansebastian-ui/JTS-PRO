type Props = {

    nombre:string;

    ejercicios:{

        nombre:string;

        series:number;

        repeticiones:string;

        descanso:number;

    }[];

};

function RutinaCard({

    nombre,

    ejercicios

}:Props){

    return(

        <div className="rutina-card">

            <h2>{nombre}</h2>

            {

                ejercicios.map(

                    (ejercicio)=>(

                        <div

                            key={ejercicio.nombre}

                            className="ejercicio"

                        >

                            <strong>

                                {ejercicio.nombre}

                            </strong>

                            <p>

                                {ejercicio.series} series

                                {" • "}

                                {ejercicio.repeticiones}

                                {" • "}

                                {ejercicio.descanso}s

                            </p>

                        </div>

                    )

                )

            }

        </div>

    );

}

export default RutinaCard;